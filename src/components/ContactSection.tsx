import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje para WhatsApp
    const message = `¡Hola! Me interesa una propiedad de lujo.
    
Mis datos:
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}
• Tipo de propiedad: ${formData.propertyType}
• Presupuesto: ${formData.budget}
• Mensaje: ${formData.message}

Gracias por su atención.`;

    const whatsappUrl = `https://wa.me/13473602417?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+1 (347) 360-2417",
      action: () => window.open('tel:+13473602417', '_self')
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Contacto Directo",
      action: () => window.open('https://wa.me/13473602417', '_blank')
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@drluxuryhomes.com",
      action: () => window.open('mailto:info@drluxuryhomes.com', '_self')
    },
    {
      icon: Globe,
      title: "Ubicaciones",
      value: "Puerto Vallarta | Punta Cana",
      action: () => {}
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-500">Contáctanos</span> Hoy
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la propiedad 
            de lujo perfecta. Obtén asesoría personalizada sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Solicita tu <span className="text-yellow-500">Consulta Gratuita</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">
                        Teléfono *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
                        placeholder="+1 (347) 360-2417"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="propertyType" className="text-white mb-2 block">
                        Tipo de Propiedad
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500">
                          <SelectValue placeholder="Selecciona tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="penthouse">Penthouse</SelectItem>
                          <SelectItem value="departamento">Departamento</SelectItem>
                          <SelectItem value="terreno">Terreno/Lote</SelectItem>
                          <SelectItem value="comercial">Comercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-white mb-2 block">
                      Presupuesto Aproximado
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500">
                        <SelectValue placeholder="Selecciona rango" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500k-1m">$500K - $1M USD</SelectItem>
                        <SelectItem value="1m-2m">$1M - $2M USD</SelectItem>
                        <SelectItem value="2m-5m">$2M - $5M USD</SelectItem>
                        <SelectItem value="5m+">$5M+ USD</SelectItem>
                        <SelectItem value="consultar">Consultar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Mensaje Adicional
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500 min-h-[120px]"
                      placeholder="Cuéntanos más sobre lo que buscas: ubicación preferida, características específicas, fecha estimada de compra, etc."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar Consulta por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-yellow-500 text-black">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Atención Inmediata</h3>
                <p className="font-medium">
                  Respuesta en menos de 2 horas
                </p>
                <p className="text-sm mt-2">
                  Lun - Dom: 8:00 AM - 10:00 PM
                </p>
              </CardContent>
            </Card>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-yellow-500/50 transition-colors cursor-pointer" onClick={info.action}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-yellow-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-400">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                  Oficinas Principales
                </h4>
                <div className="space-y-3 text-gray-400 text-sm">
                  <div>
                    <p className="font-medium text-white">Puerto Vallarta</p>
                    <p>Marina Vallarta, Jalisco, México</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Punta Cana</p>
                    <p>Bávaro, República Dominicana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}