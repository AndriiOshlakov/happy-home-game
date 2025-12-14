'use client';

import Image from 'next/image';
import css from './Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import MobileNav from '../MobileNav/MobileNav';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  console.log(isOpen);

  return (
    <section className={css.header}>
      <div className={css.headerContainer}>
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#overview">Game Overview</Link>
            </li>
            <li>
              <Link href="#features">Gameplay Features</Link>
            </li>
          </ul>
          <Link href="#home">
            <Image alt="logo" width={80} height={46} src="/HEADER/Logo.png" className={css.logo} />
          </Link>
          <ul className={css.navList}>
            <li>
              <Link href="#play">How to Play</Link>
            </li>
            <li>
              <Link href="#encouters">Character Encounters</Link>
            </li>
            <li>
              <Link href="#gallery">Gallery</Link>
            </li>
          </ul>
          <ul className={`${css.thirdList} ${css.navList}`}>
            <li>
              <Link href="#download">Download</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <button className={css.btn} onClick={toggle}>
            <svg width={24} height={24}>
              <use href="/symbol-defs.svg#burger" />
            </svg>
          </button>
        </nav>
      </div>
      {isOpen && <MobileNav onClick={toggle} />}
    </section>
  );
}
