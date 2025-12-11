import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Happy Home - Merge & Design</h1>
        <p className={styles.heroText}>Create Comfort. Merge with Joy. Build Your Dream Space.</p>
        <button>
          <Image width={24} height={26} src="/google.png" alt="google" />
          Start Decorating Today
        </button>
      </div>
    </section>
  );
}
