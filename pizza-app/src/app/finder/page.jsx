"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import deadpool from 'public/deadpool.jpg';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link'
import GenreRadioGroup from '@/components/GenreRadioGroup/GenreRadioGroup';
import AgeRadioGroup from '@/components/AgeRadioGroup/AgeRadioGroup';
import LanguageRadioGroup from '@/components/LanguageRadioGroup/LanguageRadioGroup';


const Finder = () => {
  
  const [state, setState] = useState({
    genre: '',
    age: '',
    language: '',
    movies: [],
    showUpperSection: true,
    currentGroupIndex: 0,
    isLastGroup: false
  });

  const groupComponents = [GenreRadioGroup, AgeRadioGroup, LanguageRadioGroup]

  const genreToNumberMap = {
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    fantasy: 14,
    horror: 27,
    romance: 10749,
    family: 10751,
    sciFi: 878,
    war: 10752,
  };

  const handleGroupChange = () => {
    const nextGroupIndex = state.currentGroupIndex + 1;
    if (nextGroupIndex >= groupComponents.length) {
      fetchData();
    } else {
      setState((prevState) => ({
        ...prevState,
        currentGroupIndex: nextGroupIndex,
        isLastGroup: nextGroupIndex === groupComponents.length - 1,
      }));
    }
  };

  const handleGenreChange = (event) => {
    setState((prevState) => {
      return { ...prevState, genre: event.target.id };
    });
  };

  const handleAgeChange = (event) => {
    setState((prevState) => {
      return { ...prevState, age: event.target.id };
    });
  };

  const handleLanguageChange = (event) => {
    setState((prevState) => {
      return { ...prevState, language: event.target.id };
    });
  };

  const generateURL = () => {
    const apiKey = '82e6e19d64df3d748401ba8920381c4a';
    const genreNumber = genreToNumberMap[state.genre];
    const genre = genreNumber ? `with_genres=${genreNumber}` : '';
    let releaseDate;
  
    switch (state.age) {
      case 'vintage':
        releaseDate = 'lte=1975-12-31';
        break;
      case 'classics':
        releaseDate = 'lte=1999-12-31';
        break;
      case 'modern':
        releaseDate = 'gte=2000-01-01';
        break;
      default:
        releaseDate = '';
        break;
    }
  
    
    const url = 
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&${genre}&with_original_language=${state.language}&release_date.${releaseDate}`;

    console.log(url)

    return url
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(generateURL());
      const movies = response.data.results;
      setState((prevState) => {
        return { ...prevState, showUpperSection:false, movies };
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const CurrentGroupComponent = groupComponents[state.currentGroupIndex];

  useEffect(() => {
    console.log(state);
  }, [state]);

  const movieDisplay = state.movies.map((movie) => (
    <Link key={movie.id} href={`/movie/${movie.id}`}>
      <div className={styles.movieBox}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className={styles.movieImage}
        />
        <p className={styles.movieTitle}>{movie.title}</p>
        <p className={styles.movieYear}>{movie.release_date.substring(0, 4)}</p>
      </div>
    </Link>
  ));

  return (
    <div className={styles.container}>

  {state.showUpperSection ? (
      <>
        <div className={styles.imageContainer}>
          <Image src={deadpool} alt="Deadpool" className={styles.image} />
        </div>
        <div className={styles.text}>
            <p>What 
            {CurrentGroupComponent === GenreRadioGroup
              ? ' genre would you like to choose?'
              : CurrentGroupComponent === AgeRadioGroup
              ? ' age range would you like to choose?'
              : CurrentGroupComponent === LanguageRadioGroup
              ? ' language would you like to choose?'
              : ' default option would you like to choose?'}
            </p>
          </div>
          <CurrentGroupComponent
            handleGenreChange={handleGenreChange}
            handleAgeChange={handleAgeChange}
            handleLanguageChange={handleLanguageChange}
          />
          <button className={styles.button} onClick={handleGroupChange}>
            {state.isLastGroup ? 'Submit' : 'Next'}
          </button>
      </>
    ) : null}

    <Link href={`/movie/`}>
      <div className={styles.moviesContainer}>{movieDisplay}</div>
    </Link>

      
    </div>

    
  );
};

export default Finder;