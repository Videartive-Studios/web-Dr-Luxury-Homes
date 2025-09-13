import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Home, TrendingUp, Briefcase, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const investmentBenefits = [
  {
    icon: Home,
    title: "Valor inicial de la propiedad",
    value: "USD 112,200",
    description: "Precio de entrada competitivo en Paradise Residences con excelente proyección de crecimiento"
  },
  {
    icon: TrendingUp,
    title: "Incremento propio de Mercado 18%",
    value: "USD 24,684",
    description: "Aumento natural del valor por plusvalía del mercado inmobiliario en Punta Cana"
  },
  {
    icon: Briefcase,
    title: "Incremento por unidad de Negocio 22%",
    value: "USD 24,684",
    description: "Valor agregado al convertir la propiedad en unidad de negocio turístico rentable"
  },
  {
    icon: Trophy,
    title: "Valor final de la propiedad",
    value: "USD 157,080",
    description: "Valor total proyectado con un incremento del 40% de revalorización garantizada"
  }
];

export function InvestmentSection() {
  return (
    <section id="inversion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            <span className="text-yellow-500">Incremento del Valor</span> de la Propiedad
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Las unidades de Paradise Residences experimentan un incremento del 18% por plusvalía del mercado 
            y un 22% adicional al convertirse en unidad de negocio, logrando un 40% de revalorización total.
          </p>
        </div>

        {/* Investment Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {investmentBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-yellow-500/10 rounded-full">
                      <IconComponent className="w-8 h-8 text-yellow-500" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    {benefit.title}
                  </h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-yellow-500">
                      {benefit.value}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Investment Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">
              <span className="text-yellow-500">Revalorización Proyectada</span> Paradise Residences
            </h3>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-gray-700">Valor Inicial:</span>
                <span className="text-2xl font-bold text-black">USD 112,200</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-gray-700">+ Plusvalía de Mercado (18%):</span>
                <span className="text-xl font-semibold text-green-600">USD 24,684</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-gray-700">+ Unidad de Negocio (22%):</span>
                <span className="text-xl font-semibold text-green-600">USD 24,684</span>
              </div>
              <div className="border-t-2 border-yellow-500 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">Valor Final Proyectado:</span>
                  <span className="text-3xl font-bold text-yellow-500">USD 157,080</span>
                </div>
                <div className="text-center mt-2">
                  <span className="text-lg font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    +40% de Revalorización Total
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3NTc3ODk2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Paradise Residences Punta Cana"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                <h4 className="text-2xl font-bold mb-2">Paradise Residences</h4>
                <p className="text-lg">Tu inversión inteligente en Punta Cana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-black text-white border-0">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-yellow-500">Asegura tu Inversión</span> en Paradise Residences
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                No pierdas la oportunidad de invertir en una de las propiedades con mayor proyección 
                de revalorización en Punta Cana. Contáctanos para conocer planes de pago y disponibilidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Revalorización Garantizada</h4>
                <p className="text-gray-400">40% de incremento proyectado en el valor de tu inversión</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Unidad de Negocio</h4>
                <p className="text-gray-400">Convierte tu propiedad en una fuente de ingresos constantes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Ubicación Premium</h4>
                <p className="text-gray-400">En el corazón de Punta Cana, el destino turístico más demandado</p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 font-semibold px-8"
                onClick={() => window.open('https://wa.me/573135741413', '_blank')}
              >
                Consultar Disponibilidad e Inversión
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}