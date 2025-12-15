'use client';
import { useState } from 'react';
import css from './CookiesModal.module.css';

export default function CookiesModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <section className={css.modal}>
      <div className={css.modalContainer}>
        <h2>Cookies Policy</h2>
        <p>
          We use cookies to improve your experience on our website. By browsing this website, you
          agree to our use of cookies.
        </p>
        <div>
          <button className={css.btn} onClick={() => setIsOpen(false)}>
            Accept Cookies
          </button>
          <button className={css.btn2} onClick={() => setIsOpen(false)}>
            Decline Cookies
          </button>
        </div>
      </div>
    </section>
  );
}
