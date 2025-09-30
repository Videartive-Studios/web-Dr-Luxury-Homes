import { Button } from './ui/button';
import { Award, Users, MapPin, Star } from 'lucide-react';
import aereaConjunto from '../images/aerea-conjunto.webp';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  {
    icon: Award,
    number: "10+",
    label: "Años de Experiencia"
  },
  {
    icon: Users,
    number: "500+",
    label: "Clientes Satisfechos"
  },
  {
    icon: MapPin,
    number: "50+",
    label: "Propiedades Vendidas"
  },
  {
    icon: Star,
    number: "5★",
    label: "Calificación Promedio"
  }
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <ImageWithFallback
              src={aereaConjunto}
              alt="Dr Luxury Homes - Equipo profesional"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            
            {/* Overlay with logo or branding */}
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-bold mb-2">
                  <span className="text-yellow-500">Dr</span> Luxury Homes
                </h3>
                <p className="text-xl">Tu Socio en Inversiones de Lujo</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Acerca de <span className="text-yellow-500">Dr Luxury Homes</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                En <strong>Dr Luxury Homes</strong> nos especializamos en conectar a nuestros clientes 
                con las propiedades de lujo más exclusivas en los destinos turísticos más prestigiosos 
                de República Dominicana y el Caribe.
              </p>
              
              <p>
                Nuestra misión es brindar un servicio personalizado y de alta calidad, 
                garantizando que cada cliente encuentre la propiedad perfecta que se adapte 
                a sus necesidades, estilo de vida y objetivos de inversión.
              </p>
              
              <p>
                Con más de una década de experiencia en el mercado inmobiliario de lujo, 
                hemos desarrollado relaciones sólidas con los mejores desarrolladores y 
                tenemos acceso exclusivo a propiedades que no encontrarás en otros lugares.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mb-2 flex justify-center">
                      <div className="p-2 bg-yellow-500/10 rounded-full">
                        <IconComponent className="w-6 h-6 text-yellow-500" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-black mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 font-semibold flex-1"
                onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Galería
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold flex-1"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contactar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}