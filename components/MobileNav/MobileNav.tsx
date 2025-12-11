import Link from 'next/link';
import css from './MobileNav.module.css';

type Props = {
  onClick: () => void;
};

export default function MobileNav({ onClick }: Props) {
  return (
    <div className={css.backdrop}>
      <div className={css.navBox}>
        <button className={css.close} onClick={onClick}>
          <svg width={13} height={13}>
            <use href="/symbol-defs.svg#close" />
          </svg>
        </button>
        <ul className={css.navList}>
          <li>
            <Link href="#home" onClick={onClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#overview" onClick={onClick}>
              Game Overview
            </Link>
          </li>
          <li>
            <Link href="#features" onClick={onClick}>
              Gameplay Features
            </Link>
          </li>
          <li>
            <Link href="#play" onClick={onClick}>
              How to Play
            </Link>
          </li>
          <li style={{ fontSize: '22px' }}>
            <Link href="#encouters" onClick={onClick}>
              Character Encounters
            </Link>
          </li>
          <li>
            <Link href="#gallery" onClick={onClick}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#download" onClick={onClick}>
              Download
            </Link>
          </li>
          <li>
            <Link href="#faq" onClick={onClick}>
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={onClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
