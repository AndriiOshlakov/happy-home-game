import Hero from '@/components/Hero/Hero';
import Header from '@/components/Header/Header';
import Overview from '@/components/Overview/Overview';
import Features from '@/components/Features/Features';
import Play from '@/components/Play/Play';
import Encouters from '@/components/Encouters/Encouters';
import Gallery from '@/components/Gallery/Gallery';
import Download from '@/components/Download/Download';
import Faq from '@/components/Faq/Faq';
import Contact from '@/components/Contact/Contact';
import CookiesModal from '@/components/CookiesModal/CookiesModal';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <Features />
      <Play />
      <Encouters />
      <Gallery />
      <Download />
      <Faq />
      <Contact />
      <CookiesModal />
    </>
  );
}
