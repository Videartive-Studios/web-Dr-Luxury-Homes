import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

import fachada from '../images/fachada-harper-paradise.webp';
import piscina from '../images/piscina-harper-paradise.webp';
import sala from '../images/sala-harper-paradise.webp';

const slides = [
  {
    id: 1,
    image: fachada,
    title: "Dr Luxury Homes: Tu Experiencia de Lujo Frente al Mar",
    subtitle: "Descubre propiedades exclusivas en los destinos más prestigiosos.",
    cta: "Asesoría Personalizada"
  },
  {
    id: 2,
    image: piscina,
    title: "Estilo, Confort y Acabados de Lujo Insuperables",
    subtitle: "Cada detalle, cuidadosamente curado para tu bienestar.",
    cta: "Habla con un Experto"
  },
  {
    id: 3,
    image: sala,
    title: "Amenidades de Clase Mundial a Tu Alcance",
    subtitle: "Disfruta de piscinas infinitas, spas y seguridad 24/7.",
    cta: "Ver Amenidades Exclusivas"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className="relative h-full w-full">
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-yellow-500 block">HARPER PARADISE</span>
                  <span className="block">PUNTA CANA</span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                
                <Button 
                  size="lg"
                  className="bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 font-semibold text-lg px-8 py-4 h-auto"
                  onClick={() => window.open('https://wa.me/573135741413', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yellow-500 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
