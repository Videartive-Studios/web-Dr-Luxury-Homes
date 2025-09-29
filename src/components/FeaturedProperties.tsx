import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Bed, Eye, ShowerHead, Utensils, Armchair, Home } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AptoUnaHabitacion from '../images/apto-una-habitacion.webp';
import AptoDosHabitaciones from '../images/apto-dos-habitaciones.webp';
import PenthouseDosHabitaciones from '../images/Penthouse-dos-habitaciones.webp';
import SolariumPenthouse1 from '../images/solarium-penthouse-1.webp';
import SolariumPenthouse2 from '../images/solarium-penthouse-2.webp';
import SolariumPenthouse3 from '../images/solarium-penthouse-3.webp';
import { ImageSlider } from './ImageSlider';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";

const properties: any[] = [
  {
    id: 1,
    title: "Apartamento de una Habitación",
    bedrooms: 1,
    bathrooms: 1,
    kitchens: 1,
    livingRooms: 1,
    price: "Precios desde USD 112.200",
    image: AptoUnaHabitacion,
  },
  {
    id: 2,
    title: "Apartamento de dos habitaciones",
    bedrooms: 2,
    bathrooms: 2,
    kitchens: 1,
    livingRooms: 1,
    price: "Precios desde USD 170.000",
    image: AptoDosHabitaciones,
  },
  {
    id: 3,
    title: "Penthouse de dos habitaciones",
    bedrooms: 2,
    bathrooms: 2,
    penthouses: 2,
    kitchens: 1,
    livingRooms: 1,
    price: "Precios desde USD 194.200",
    image: PenthouseDosHabitaciones,
  },
  {
    id: 4,
    title: "Solarium de penthouse de una y dos habitaciones",
    bedrooms: 2,
    bathrooms: 2,
    penthouses: 2,
    kitchens: 1,
    livingRooms: 1,
    price: "Consulta nuestros precios",
    image: [SolariumPenthouse1, SolariumPenthouse2, SolariumPenthouse3],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden cursor-pointer">
                    {Array.isArray(property.image) ? (
                      <ImageSlider images={property.image} alt={property.title} />
                    ) : (
                      <ImageWithFallback
                        src={property.image}
                        alt={property.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  {Array.isArray(property.image) ? (
                    <ImageSlider images={property.image} alt={property.title} />
                  ) : (
                    <ImageWithFallback
                      src={property.image}
                      alt={property.title}
                      className="w-full h-auto object-contain"
                    />
                  )}
                </DialogContent>
              </Dialog>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-black group-hover:text-yellow-600 transition-colors">
                    {property.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <ShowerHead className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    {property.penthouses && (
                      <div className="flex items-center">
                        <Home className="w-4 h-4 mr-1" />
                        <span>{property.penthouses}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Utensils className="w-4 h-4 mr-1" />
                      <span>{property.kitchens}</span>
                    </div>
                    <div className="flex items-center">
                      <Armchair className="w-4 h-4 mr-1" />
                      <span>{property.livingRooms}</span>
                    </div>
                  </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-600">
                    {property.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-black text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    onClick={() => window.open('https://wa.me/13473602417', '_blank')}
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
            onClick={() => window.open('https://wa.me/13473602417', '_blank')}
          >
            Explorar Todas las Propiedades
          </Button>
        </div>
      </div>
    </section>
  );
}