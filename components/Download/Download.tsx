import Image from 'next/image';
import css from './Download.module.css';

export default function Download() {
  return (
    <section className={css.download} id="download">
      <div className={css.top}></div>
      <div className={css.downloadContainer}>
        <h2 className={css.downloadTitle}>Download</h2>
        <p className={css.downloadText}>Bring Life Back to Your Happy Home</p>
        <button className={css.btn}>
          <svg width={24} height={24}>
            <use href="/symbol-defs.svg#google" />
          </svg>
          <div>
            <p className={css.btnText}>Get it on</p>
            <p className={css.google}>Google Play</p>
          </div>
        </button>
      </div>
      <div className={css.bottom}></div>
    </section>
  );
}
