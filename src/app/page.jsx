"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import movies from 'public/movies.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Animation from '@/components/Animation/Animation';

const Home = () => {


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          <span> <Animation /></span>
        </h1>
        <Link href='/finder'>
          <button className={styles.button}>Get started</button>
        </Link>
      </div>
      <div className={styles.item}>  
        <Image src={movies} alt="Movies" className={styles.image}/>
      </div>
    </div>
  )
}

export default Home
