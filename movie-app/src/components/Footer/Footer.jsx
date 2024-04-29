import React from 'react'
import styles from './footer.module.css'
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.firstText}>2023 KinoSfera</span>
        <span className={styles.secondText}>All right reserved</span>
      </div>
      <div className={styles.social}>
        <Image src="/1.png" classname={styles.icon} width={15} height={15} alt=""/>
        <Image src="/2.png" classname={styles.icon} width={15} height={15} alt=""/>
        <Image src="/3.png" classname={styles.icon} width={15} height={15} alt=""/>
        <Image src="/4.png" classname={styles.icon} width={15} height={15} alt=""/>
        <Image src="/5.png" classname={styles.icon} width={15} height={15} alt=""/>
      </div>
    </div>
  )
}

export default Footer
