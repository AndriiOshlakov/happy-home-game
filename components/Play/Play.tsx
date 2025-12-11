import { play } from '@/constants/play';
import css from './Play.module.css';

export default function Play() {
  return (
    <section className={css.play} id="play">
      <div className={css.playContainer}>
        <h2 className={css.playTitle}>How to Play</h2>
        <ul className={css.playList}>
          {play.map((item, index) => (
            <li key={index} className={css.playListItem}>
              <span className={css.span}>{index + 1}</span>
              <p className={css.playListItemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
