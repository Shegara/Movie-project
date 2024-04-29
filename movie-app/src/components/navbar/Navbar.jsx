"use client"
import styles from './navbar.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo.jpg'
import Button from "@/components/Button/Button"


const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "Movie Finder",
    url: "/finder",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];


const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <Image src={logo} className={styles.logo} />
      </Link>
      <div className={styles.links}>
      {links.map(link=>(
        <Link 
        key={link.id} 
        href={link.url}
        className={styles.link}
        >{link.title}</Link>
      ))}
      </div>
    </div>
  )
}

export default Navbar