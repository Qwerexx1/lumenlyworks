import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import ContrastGrid from '@/components/landing/ContrastGrid';
import ServicePillars from '@/components/landing/ServicePillars';
import ProcessTimeline from '@/components/landing/ProcessTimeline';
import TechStack from '@/components/landing/TechStack';
import Pricing from '@/components/landing/Pricing';
import Faq from '@/components/landing/Faq';
import ConversionTerminal from '@/components/landing/ConversionTerminal';
import Footer from '@/components/landing/Footer';

const HERO_IMAGE = 'https://media.base44.com/images/public/6ac26d13bc55a8907418ef04/ead733832_generated_e7d7ae51.png';
const PANEL_IMAGE = 'https://media.base44.com/images/public/6ac26d13bc55a8907418ef04/8803a8a00_generated_405d0dd9.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-ink-strong">
      <Navbar />
      <main>
        <Hero imageUrl={HERO_IMAGE} />
        <ContrastGrid />
        <ServicePillars />
        <ProcessTimeline />
        <TechStack />
        <Pricing />
        <Faq />
        <ConversionTerminal imageUrl={PANEL_IMAGE} />
      </main>
      <Footer />
    </div>
  );
}