'use client';

import Image from 'next/image';
import css from './Gallery.module.css';

import { images } from '@/constants/images';
import { useState } from 'react';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;
  const imagesToShow = 3;

  const nextSlide = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === total - 1;

  let start = currentIndex;

  // якщо активна остання — зсуваємо на останні 3
  if (currentIndex >= total - 1) {
    start = total - imagesToShow;
  }

  // якщо активна середина — центр зміщується
  if (currentIndex > 0 && currentIndex < total - 1) {
    start = currentIndex - 1;
  }

  // гарантуємо, що старт не менше 0
  if (start < 0) start = 0;

  const visibleImages = images.slice(start, start + imagesToShow);

  // ----------------------------
  // ВИЗНАЧЕННЯ АКТИВНОГО ІНДЕКСА УСЕРЕДИНІ ТРІЙКИ
  // ----------------------------

  let activeVisibleIndex = 0;

  if (currentIndex === 0) {
    activeVisibleIndex = 0; // перша активна на початку
  } else if (currentIndex === total - 1) {
    activeVisibleIndex = visibleImages.length - 1; // остання активна в кінці
  } else {
    activeVisibleIndex = 1; // центральна активна
  }
  console.log(currentIndex);

  return (
    <section className={css.gallery} id="gallery">
      <div className={css.galleryContainer}>
        <h2 className={css.galleryTitle}>Gallery</h2>
        <div className={css.galleryBox}>
          <button className={css.galleryBtnBack} onClick={prevSlide} disabled={isPrevDisabled}>
            <svg width={24} height={24}>
              <use href="/symbol-defs.svg#back" />
            </svg>
          </button>
          <ul className={css.images}>
            {visibleImages.map((slide, index) => {
              const isActive = index === activeVisibleIndex;
              return (
                <li key={slide.img}>
                  <Image
                    src={slide.img}
                    alt="image"
                    width={288}
                    height={260}
                    className={`${css.image} ${isActive ? css.active : ''}`}
                  />
                </li>
              );
            })}
          </ul>
          <button className={css.galleryBtnForward} onClick={nextSlide} disabled={isNextDisabled}>
            <svg width={24} height={24}>
              <use href="/symbol-defs.svg#forvard" />
            </svg>
          </button>
        </div>
        <div className={css.bullets}>
          {images.map((img, index) => {
            const isActive = index === currentIndex; // активний = центральний
            return (
              <div
                key={img.img}
                className={`${css.bullet} ${isActive ? css.activeBullet : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
