import Image from 'next/image';
import css from './Contact.module.css';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className={css.contact} id="contact">
      <div className={css.contactContainer}>
        <h2 className={css.contactTitle}>Contact</h2>
        <div className={css.contactMob}>
          <p className={css.contactText1}>Email: info@designwuca.pro</p>
          <br />
          <p className={css.contactText2}>
            Business Address: Wuca Games, 88 Blossom Lane, Portland, OR 97229
          </p>
          <div className={css.contactBox}>
            <Image
              src="/CONTACT/image.png"
              alt="icon"
              width={146}
              height={238}
              className={css.image}
            />
            <div>
              <p className={css.contactText}>Our social media:</p>
              <div className={css.contactWraper}>
                <a href="https://instagram.com/happyhomegame">
                  <svg width={24} height={24}>
                    <use href="/CONTACT/Instagram.svg" />
                  </svg>
                </a>
                <a href="https://pinterest.com/happyhomedesign">
                  <svg width={24} height={24}>
                    <use href="/CONTACT/Pinterest.svg" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={css.contactDesk}>
          <Image
            src="/CONTACT/image.png"
            alt="icon"
            width={146}
            height={238}
            className={css.image}
          />
          <div>
            <p className={css.contactText}>Email: info@designwuca.pro</p>
            <br />
            <p className={css.contactText}>
              Business Address: Wuca Games, 88 Blossom Lane, Portland, OR 97229
            </p>
            <br />
            <p className={css.contactText}>Our social media:</p>
            <br />
            <div className={css.contactWraper}>
              <a href="https://instagram.com/happyhomegame">
                <svg width={24} height={24}>
                  <use href="/CONTACT/Instagram.svg" />
                </svg>
              </a>
              <a href="https://pinterest.com/happyhomedesign">
                <svg width={24} height={24}>
                  <use href="/CONTACT/Pinterest.svg" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
