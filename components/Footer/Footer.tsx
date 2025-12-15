import Link from 'next/link';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <section className={css.footer}>
      <div className={css.footerContainer}>
        <ul>
          <li>
            <Link href="/privacy">Privacy Policy | </Link>
          </li>
          <li>
            <Link href="/terms">Terms & Conditions | </Link>
          </li>
          <li>
            <Link href="/cookies">Cookies Policy</Link>
          </li>
        </ul>
        <p>All rights reserved designwuca.pro | 2025</p>
      </div>
    </section>
  );
}
