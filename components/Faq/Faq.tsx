'use client';

import { faqList } from '@/constants/faqList';
import css from './Faq.module.css';
import { useState } from 'react';

export default function Faq() {
  const [isOpen, setIsOpen] = useState<number[]>([]);

  const toggle = (clickedId: number) => {
    if (isOpen.includes(clickedId)) {
      const filteredIdArray = isOpen.filter((filteredId) => filteredId !== clickedId);
      setIsOpen(filteredIdArray);
    } else {
      const updatedArray = [...isOpen, clickedId];
      setIsOpen(updatedArray);
    }
  };

  return (
    <section className={css.faq} id="faq">
      <div className={css.faqContainer}>
        <h2 className={css.faqTitle}>FAQ</h2>
        <ul className={css.faqList}>
          {faqList.map((item, index) => {
            const isVisible = isOpen.includes(index);
            return (
              <li className={css.faqListItem} key={index}>
                <div className={css.boxOne}>
                  <p className={css.paragraph}>{item.text}</p>
                  {!isVisible ? (
                    <svg
                      width={22}
                      height={22}
                      onClick={() => {
                        toggle(index);
                      }}
                    >
                      <use href="/symbol-defs.svg#plus" />
                    </svg>
                  ) : (
                    <svg
                      width={22}
                      height={22}
                      onClick={() => {
                        toggle(index);
                      }}
                    >
                      <use href="/symbol-defs.svg#minus" />
                    </svg>
                  )}
                </div>
                {isVisible && (
                  <div className={css.boxTwo}>
                    <p className={css.paragraph}>{item.subText}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
