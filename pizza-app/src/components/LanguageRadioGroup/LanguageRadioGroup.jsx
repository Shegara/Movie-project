import React from 'react'
import spain from 'public/spain.svg'
import styles from './language.module.css'; 
import uk from 'public/uk.svg'
import Image from 'next/image';
import france from 'public/france.svg'

const languageCategories = [
    {
      id: 'en',
      label: 'English',
      image: uk,
    },
    {
      id: 'es',
      label: 'Spanish',
      image: spain,
    },
    {
      id: 'fr',
      label: 'French',
      image: france,
    },
  ];

const LanguageRadioGroup = ({ handleLanguageChange }) => {
  return (
    <div>
    <div className={styles.radioTile}>
      {languageCategories.map((category) => (
        <div key={category.id} className={styles.inputContainer}>
          <input
            id={category.id}
            type="radio"
            name="radio"
            onChange={handleLanguageChange}
          />
          <div className={styles.radioTile}>
            <Image src={category.image} alt="image" width={70} height={70} />
            <label htmlFor={category.id}>{category.label}</label>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default LanguageRadioGroup


  
  