import Nav from '@/components/pixel-ceylon/Nav';
import Hero from '@/components/pixel-ceylon/Hero';
import Ticker from '@/components/pixel-ceylon/Ticker';
import Services from '@/components/pixel-ceylon/Services';
import Stats from '@/components/pixel-ceylon/Stats';
import Projects from '@/components/pixel-ceylon/Projects';
import SocialProof from '@/components/pixel-ceylon/SocialProof';
import CTA from '@/components/pixel-ceylon/CTA';
import Footer from '@/components/pixel-ceylon/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Stats />
      <Projects />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  );
}
