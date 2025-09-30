import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { FeaturedProperties } from './components/FeaturedProperties';
import { LuxuryAmenities } from './components/LuxuryAmenities';
import { InvestmentSection } from './components/InvestmentSection';
import { AboutSection } from './components/AboutSection';
import { Gallery } from './components/Gallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div id="inicio">
          <HeroSlider />
        </div>
        <FeaturedProperties />
        <LuxuryAmenities />
        <InvestmentSection />
        <AboutSection />
        <Gallery />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}