import { useState } from 'react';
import { Button } from './ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import parqueadero from '../images/parqueadero.webp';
import alcoba from '../images/alcoba.webp';
import piletas from '../images/piletas.webp';
import cocina from '../images/cocina.webp';
import salaHarperParadise from '../images/sala-harper-paradise.webp';
import solariumPenthouse1 from '../images/solarium-penthouse-1.webp';

const galleryImages = [
  {
    id: 1,
    src: parqueadero,
    alt: "Parqueadero del proyecto",
    category: "Exteriores"
  },
  {
    id: 2,
    src: piletas,
    alt: "Pileta privada",
    category: "Exteriores"
  },
  {
    id: 3,
    src: alcoba,
    alt: "Alcoba de lujo",
    category: "Amenidades"
  },
  {
    id: 4,
    src: cocina,
    alt: "Club de playa privado exclusivo",
    category: "Amenidades"
  },
  {
    id: 5,
    src: salaHarperParadise,
    alt: "Sala de estar",
    category: "Interiores"
  },
  {
    id: 6,
    src: solariumPenthouse1,
    alt: "Desarrollo inmobiliario de lujo",
    category: "Exteriores"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Galería de <span className="text-yellow-500">Imágenes</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre la belleza y elegancia de nuestras propiedades exclusivas a través 
            de esta cuidada selección de imágenes de alta calidad.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square"
              onClick={() => openLightbox(image.id)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="text-yellow-500 text-sm font-semibold mb-1">
                    {image.category}
                  </div>
                  <div className="text-white text-lg font-medium">
                    Ver Imagen Completa
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 font-semibold px-8"
            onClick={() => window.open('https://wa.me/13473602417', '_blank')}
          >
            Ver Galería Completa por WhatsApp
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-yellow-500 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-500 z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-500 z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
            <ImageWithFallback
              src={selectedImageData.src}
              alt={selectedImageData.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Image Info */}
            <div className="text-center mt-4 text-white">
              <div className="text-yellow-500 text-sm font-semibold mb-1">
                {selectedImageData.category}
              </div>
              <div className="text-lg">
                {selectedImageData.alt}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}