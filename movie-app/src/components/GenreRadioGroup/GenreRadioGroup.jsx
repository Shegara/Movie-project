"use client"
import React from 'react';
import styles from './genre.module.css';
import Action from 'public/action.svg'
import Adventure from 'public/adventure.svg'
import Animation from 'public/animation.svg'
import Comedy from 'public/comedy.svg'
import Fantasy from 'public/fantasy.svg'
import Horror from 'public/horror.svg'
import Romance from 'public/romance.svg'
import War from 'public/war.svg'
import Scifi from 'public/scifi.svg'
import Family from 'public/family.svg'
import Image from 'next/image';



const genreIcons = {
  action: Action,
  adventure: Adventure,
  animation: Animation,
  comedy: Comedy,
  fantasy: Fantasy,
  horror: Horror,
  romance: Romance,
  war: War,
  family: Family,
  scifi: Scifi
};

const genreOptions = [
  { id: 'action', label: 'Action' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'animation', label: 'Animation' },
  { id: 'comedy', label: 'Comedy' },
  { id: 'fantasy', label: 'Fantasy' },
  { id: 'horror', label: 'Horror' },
  { id: 'romance', label: 'Romance' },
  { id: 'family', label: 'Family' },
  { id: 'scifi', label: 'Sci-fi' },
  { id: 'war', label: 'War' },
];

const GenreRadioGroup = ({ handleGenreChange }) => {
  return (
    <div className={styles.radioGroup}>
      {genreOptions.map((option) => (
    <div className={styles.inputContainer} key={option.id}>
      <input
        id={option.id}
        type="radio"
        name="radio"
        onChange={handleGenreChange}
      />
    <div className={styles.radioTile}>
      {genreIcons[option.id] && (
        <Image src={genreIcons[option.id]} alt={option.label} width={70} height={70} />
      )}
      <label htmlFor={option.id}>{option.label}</label>
    </div>
    </div>
))}
    </div>
  );
};

export default GenreRadioGroup;