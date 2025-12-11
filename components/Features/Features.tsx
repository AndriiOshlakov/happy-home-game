import { features } from '@/constants/features';
import css from './Features.module.css';
import Image from 'next/image';

export default function Features() {
  return (
    <section className={css.features} id="features">
      <div className={css.featuresContainer}>
        <h2 className={css.featuresTitle}>Gameplay Features</h2>
        <ul className={css.featuresList}>
          {features.map((item, index) => (
            <li key={index} className={css.featuresListItem}>
              <Image
                src={item.image}
                alt="icon"
                width={242}
                height={194}
                className={css.featuresListItemImg}
              />
              <div className={css.featuresListItemBox}>
                <p className={css.featuresListItemBoxTitle}>
                  {item.title} <span className={css.featuresListItemBoxText}>{item.text}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
