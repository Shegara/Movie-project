import React from 'react';
import Image from 'next/image';
import styles from './age.module.css'; 
import eighties from 'public/80s.svg';
import classic from 'public/classic.svg';
import modern from 'public/modern.svg';



const ageCategories = [
  {
    id: 'vintage',
    label: 'Vintage',
    image: eighties,
  },
  {
    id: 'classics',
    label: 'The classics',
    image: classic,
  },
  {
    id: 'modern',
    label: 'Modern cinema',
    image: modern,
  },
];

const AgeRadioGroup = ({ handleAgeChange }) => {
  return (
    <div>
      <div className={styles.radioTile}>
        {ageCategories.map((category) => (
          <div key={category.id} className={styles.inputContainer}>
            <input
              id={category.id}
              type="radio"
              name="radio"
              onChange={handleAgeChange}
            />
            <div className={styles.radioTile}>
              <Image src={category.image} alt="clock" width={70} height={70} />
              <label htmlFor={category.id}>{category.label}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeRadioGroup;