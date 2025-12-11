import Image from 'next/image';
import css from './Overview.module.css';

export default function Overview() {
  return (
    <section className={css.overview}>
      <div className={css.overviewContainer}>
        <Image
          width={320}
          height={40}
          alt="icon"
          src="/OVERVIEW/OverviewTopMob.png"
          className={`${css.borders} ${css.borderTop}`}
        />
        <div className={css.overviewBox} id="overview">
          <h2 className={css.overviewTitle}>Game Overview</h2>
          <div>
            <div className={css.overviewTextBox}>
              <p className={css.overviewText}>
                Welcome to Happy Home, where every merge is a step closer to building the cozy
                sanctuary of your dreams.You join Ava, a young designer returning to her family's
                old cottage after years away. Dusty rooms, forgotten blueprints, and hidden
                treasures await — all waiting for your creative touch.
              </p>
              <br />
              <p className={css.overviewText}>
                Uncover sentimental mementos, unlock themed rooms, and merge your way through the
                renovation of a lifetime. Whether it's a sunlit reading nook or a charming garden
                patio, your design choices shape the entire home.
              </p>
              <br />
              <p className={css.overviewText}>
                Design. Restore. Remember. This isn't just decoration — it's healing through
                creativity.
              </p>
            </div>
            <Image
              width={183}
              height={220}
              alt="mobiles"
              src="/OVERVIEW/Mobiles.png"
              className={css.mobiles}
            />
          </div>
        </div>
        <Image
          width={320}
          height={40}
          alt="icon"
          src="/OVERVIEW/OverviewBottomMob.png"
          className={`${css.borders} ${css.borderBottom}`}
        />
      </div>
    </section>
  );
}
