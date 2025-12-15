import { encouters } from '@/constants/encouters';
import css from './Encouters.module.css';
import Image from 'next/image';

export default function Encouters() {
  return (
    <section className={css.encouters} id="encouters">
      <div className={css.encoutersContainer}>
        <h2 className={css.encoutersTitle}>Character Encouters</h2>
        <ul className={css.encoutersList}>
          {encouters.map((item, index) => (
            <li className={css.encoutersListItem} key={index}>
              <Image src={item.img} alt="avatar" width={64} height={68} className={css.image} />
              <div className={css.encoutersListItemBox}>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
