import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Bed, Bath, Square, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const properties = [
  {
    id: 1,
    title: "Villa Frente al Mar - Puerto Vallarta",
    location: "Zona Hotelera Norte, Puerto Vallarta",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 5,
    area: "450 m²",
    price: "$2,850,000 USD",
    image: "https://images.unsplash.com/photo-1600760380065-2fcdc9e73007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGluZmluaXR5JTIwcG9vbCUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NTc3ODk2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true
  },
  {
    id: 2,
    title: "Penthouse Moderno - Marina Vallarta",
    location: "Marina Vallarta, Puerto Vallarta",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    area: "320 m²",
    price: "$1,950,000 USD",
    image: "https://images.unsplash.com/photo-1717326996078-cf86b5d979c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBiYWxjb255JTIwdmlld3xlbnwxfHx8fDE3NTc3ODk2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true
  },
  {
    id: 3,
    title: "Departamento de Lujo - Conchas Chinas",
    location: "Conchas Chinas, Puerto Vallarta",
    type: "Departamento",
    bedrooms: 2,
    bathrooms: 2,
    area: "185 m²",
    price: "$850,000 USD",
    image: "https://images.unsplash.com/photo-1694858473117-5e159dcfaf1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMG1vZGVybiUyMGRlc2lnbnxlbnwxfHx8fDE3NTc3ODk2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  }
];

export function FeaturedProperties() {
  return (
    <section id="propiedades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Propiedades <span className="text-yellow-500">Destacadas</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra selección exclusiva de propiedades de lujo en los destinos más 
            prestigiosos, cada una cuidadosamente seleccionada por su ubicación privilegiada 
            y características excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {property.featured && (
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-black hover:bg-yellow-400">
                    Super Destacado
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-black group-hover:text-yellow-600 transition-colors">
                    {property.title}
                  </h3>
                  <Badge variant="outline" className="text-sm">
                    {property.type}
                  </Badge>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-600">
                    {property.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-black text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    onClick={() => window.open('https://wa.me/573135741413', '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 font-semibold px-8"
            onClick={() => window.open('https://wa.me/573135741413', '_blank')}
          >
            Explorar Todas las Propiedades
          </Button>
        </div>
      </div>
    </section>
  );
}