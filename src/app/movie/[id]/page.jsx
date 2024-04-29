"use client"
import React, { useEffect, useState } from 'react';
import Circle from '@/components/Circle/Circle'
import Image from 'next/image'
import styles from './movie.module.css';
import people from 'public/people.png';
import axios from 'axios';

export default function Movie(props) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiKey = '82e6e19d64df3d748401ba8920381c4a'; // Replace with your API key
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${props.params.id}?api_key=${apiKey}`
        );

        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [props.params.id]);

  const roundedRating = movie ? movie.vote_average.toFixed(1) : null;
  

  return (
  <div>
    {movie ? (
    <div className={styles.movieContainer}>
      <div className={styles.posterContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <p className={styles.releaseDate}>Release Date: {movie.release_date}</p>
      </div>
      <div className={styles.movieInfo}>
        
        <h1 className={styles.movieTitle}>{movie.title}</h1>
        
        <p className={styles.textDesc}>Plot</p>        
        <p className={styles.movieDesc}>{movie.overview}</p> 

        <div className={styles.movieRatings}>
          <div className={styles.circle}>
            <Circle rating={roundedRating}/>
            <p className={styles.movieVotes}>Average rating</p>
          </div>
          <div>
            <Image src={people} alt='people' className={styles.peopleImage}/>
            <p className={styles.movieVotes}>Number of votes: {movie.vote_count}</p>
          </div>
        </div>

      </div>
    </div>
  ) : (
    <p>Loading...</p>
  )}
  </div>
  );
}