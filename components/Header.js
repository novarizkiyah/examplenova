import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";
import styles from "../styles/Layout.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openmenu =  ()=>setIsOpen(!isOpen);
  
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/' passHref>
          <h2>Nova Blog</h2>
        </Link>
        <ul className={isOpen === false ? styles.navmenu : styles.navmenu + ' ' + styles.active }>
                <li className={styles.navitem}>
                    <Link href="/">
                        <a className={styles.navlink}>Home</a>
                    </Link>
                    
                </li>
                <li className={styles.navitem}>
                    <Link href="/blog">
                        <a className={styles.navlink}>Blog</a>
                    </Link>   
                </li>
                <li className={styles.navitem}>
                    <Link href="/projects">
                        <a className={styles.navlink}>Projects</a>
                    </Link>   
                </li>
                <li className={styles.navitem}>
                    <Link href="/about">
                        <a className={styles.navlink}>About</a>
                    </Link>
                </li>
            </ul>
            <button className={isOpen === false ? 
                styles.hamburger : styles.hamburger + ' ' + styles.active}
                onClick={openmenu}
                >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
            </nav>
    </header>
  )
}

