import { useState } from 'react';
import { Button } from './ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600760380065-2fcdc9e73007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGluZmluaXR5JTIwcG9vbCUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NTc3ODk2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Villa de lujo con piscina infinita frente al mar",
    category: "Exteriores"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1694858473117-5e159dcfaf1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMG1vZGVybiUyMGRlc2lnbnxlbnwxfHx8fDE3NTc3ODk2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Interior moderno de penthouse de lujo",
    category: "Interiores"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1672983665896-e02f28d14173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNwYSUyMHdlbGxuZXNzJTIwYW1lbml0aWVzfGVufDF8fHx8MTc1Nzc4OTY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Spa y wellness de lujo",
    category: "Amenidades"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1744408480093-04b32d279a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMGNsdWIlMjBwcml2YXRlJTIwcmVzb3J0fGVufDF8fHx8MTc1Nzc4OTY2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Club de playa privado exclusivo",
    category: "Amenidades"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1717326996078-cf86b5d979c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBiYWxjb255JTIwdmlld3xlbnwxfHx8fDE3NTc3ODk2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Balcón con vista panorámica al mar",
    category: "Vistas"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3NTc3ODk2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
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