import { Card, CardContent } from './ui/card';
import { 
  Building2, 
  Home, 
  ArrowUp, 
  Waves, 
  Umbrella, 
  Users,
  UtensilsCrossed,
  Wine,
  Baby,
  Sparkles,
  Plane,
  Cross,
  Shield,
  Zap
} from 'lucide-react';

const amenities = [
  {
    icon: Building2,
    title: "4 Bloque de Edificios",
    description: "Complejo residencial moderno con arquitectura contemporánea distribuido en cuatro torres exclusivas."
  },
  {
    icon: Home,
    title: "Unidades de 1, 2, y 3 Habitaciones",
    description: "Variedad de opciones habitacionales desde estudios hasta amplias unidades familiares de 3 recámaras."
  },
  {
    icon: ArrowUp,
    title: "Ascensor",
    description: "Ascensores de alta velocidad con tecnología moderna para máximo confort y accesibilidad."
  },
  {
    icon: Waves,
    title: "Piscina",
    description: "Piscina infinity con vistas espectaculares y área de relajación para disfrutar todo el año."
  },
  {
    icon: Umbrella,
    title: "Área de Recreación y Terraza",
    description: "Espacios al aire libre con mobiliario de lujo para relajarse y socializar en un ambiente exclusivo."
  },
  {
    icon: Users,
    title: "Lobby",
    description: "Lobby elegante con recepción 24/7 y espacios de espera diseñados con los más altos estándares."
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    description: "Restaurantes gourmet con cocina internacional y local, perfectos para experiencias gastronómicas únicas."
  },
  {
    icon: Wine,
    title: "Bares",
    description: "Bares exclusivos con cocteles premium y ambiente sophisticated para momentos de relajación."
  },
  {
    icon: Baby,
    title: "Área Infantil",
    description: "Zonas de juegos seguras y divertidas diseñadas especialmente para el entretenimiento de los niños."
  },
  {
    icon: Sparkles,
    title: "Spa",
    description: "Centro de bienestar completo con tratamientos relajantes y terapias para renovar cuerpo y mente."
  },
  {
    icon: Plane,
    title: "Club de Playa",
    description: "Acceso exclusivo a club de playa privado con servicios premium y actividades acuáticas."
  },
  {
    icon: Cross,
    title: "Asistencia Médica",
    description: "Servicio médico disponible las 24 horas para tranquilidad y seguridad de todos los residentes."
  },
  {
    icon: Shield,
    title: "Seguridad 24/7",
    description: "Sistema integral de seguridad con vigilancia profesional y tecnología de monitoreo avanzada."
  },
  {
    icon: Zap,
    title: "Punto de Carga para Vehículos Eléctricos",
    description: "Estaciones de carga eléctrica de última generación para vehículos ecológicos y sostenibles."
  }
];

export function LuxuryAmenities() {
  return (
    <section id="amenidades" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Vive con Todo lo que Necesitas</span> al Alcance
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Harper Paradise cuenta con todas las comodidades y servicios que necesitas 
            para vivir una experiencia completa de lujo en el corazón de Punta Cana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-yellow-500/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-yellow-500/10 rounded-full group-hover:bg-yellow-500/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-yellow-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                    {amenity.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            ¿Quieres conocer más sobre nuestras amenidades exclusivas y cómo pueden 
            transformar tu experiencia de vida de lujo?
          </p>
          <button 
            className="bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 font-semibold px-8 py-4 rounded-lg text-lg"
            onClick={() => window.open('https://wa.me/573135741413', '_blank')}
          >
            Consulta Disponibilidad por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}