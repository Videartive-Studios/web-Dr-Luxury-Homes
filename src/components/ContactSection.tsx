import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, Clock, Send } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';

// Credenciales de EmailJS
const SERVICE_ID = 'default_service';
const TEMPLATE_ID = 'template_q49uqgw';
const USER_ID = 'glvjTFd447RNGrYnH';

export function ContactSection() {
  const [showDialog, setShowDialog] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init(USER_ID);
  }, []);

  const onSubmitHtmlForm = async (event) => {
    event.preventDefault();
    setIsSending(true);

    const form = event.target;
    if (!form) return;

    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form);
      console.log('SUCCESS!', result.status, result.text);
      setShowDialog(true);
      form.reset();
    } catch (err) {
      console.log('FAILED...', err);
      alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+1 (347) 360-2417",
      action: () => window.open('tel:+13473602417', '_self')
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@drluxuryhomes.com",
      action: () => window.open('mailto:info@drluxuryhomes.com', '_self')
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
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

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card className="bg-[#101828] border border-slate-800 rounded-3xl shadow-xl">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Solicita tu <span className="text-yellow-500">Consulta Gratuita</span>
                </h3>

                <form id="contact-form" onSubmit={onSubmitHtmlForm} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-gray-300 text-sm mb-2 block">
                        Nombre Completo *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required 
                        placeholder="Tu nombre completo" 
                        className="w-full p-3 bg-slate-800 text-white rounded-md border border-slate-700 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="text-gray-300 text-sm mb-2 block">
                        Email *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required 
                        placeholder="tu@email.com" 
                        className="w-full p-3 bg-slate-800 text-white rounded-md border border-slate-700 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="text-gray-300 text-sm mb-2 block">
                        Teléfono *
                      </label>
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        required 
                        placeholder="+1 (347) 360-2417" 
                        className="w-full p-3 bg-slate-800 text-white rounded-md border border-slate-700 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="text-gray-300 text-sm mb-2 block">
                        Tipo de Propiedad
                      </label>
                      <select 
                        name="propertyType" 
                        id="propertyType" 
                        className="w-full p-3 bg-slate-800 text-white rounded-md border border-slate-700 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 transition-all"
                      >
                        <option value="">Selecciona tipo</option>
                        <option value="villa">Villa</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="departamento">Departamento</option>
                        <option value="terreno">Terreno/Lote</option>
                        <option value="comercial">Comercial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="text-gray-300 text-sm mb-2 block">
                      Presupuesto Aproximado
                    </label>
                    <select 
                      name="budget" 
                      id="budget" 
                      className="w-full p-3 bg-slate-800 text-white rounded-md border border-slate-700 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 transition-all"
                    >
                      <option value="">Selecciona rango</option>
                      <option value="500k-1m">$500K - $1M USD</option>
                      <option value="1m-2m">$1M - $2M USD</option>
                      <option value="2m-5m">$2M - $5M USD</option>
                      <option value="5m+">$5M+ USD</option>
                      <option value="consultar">Consultar</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-gray-300 text-sm mb-2 block">
                      Mensaje Adicional
                    </label>
                    <textarea 
                      name="message" 
                      id="message" 
                      placeholder="Cuéntanos más sobre lo que buscas: ubicación preferida, características específicas, fecha estimada de compra, etc."
                      className="w-full p-3 bg-slate-800 text-white rounded-md border border-slate-700 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 transition-all min-h-[120px]"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-md hover:bg-yellow-400 transition-all flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={isSending}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSending ? 'Enviando...' : 'Enviar Consulta'}
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            <Card className="bg-yellow-500 text-black rounded-2xl shadow-lg">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Atención Inmediata</h3>
                <p className="font-medium">Respuesta en menos de 2 horas</p>
                <p className="text-sm mt-2">Lun - Dom: 8:00 AM - 10:00 PM</p>
              </CardContent>
            </Card>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-[#101828] border border-slate-800 hover:border-yellow-500/50 transition-colors cursor-pointer rounded-3xl"
                  onClick={info.action}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-yellow-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                        <p className="text-gray-400">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dialogo de confirmación */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¡Mensaje Enviado!</AlertDialogTitle>
            <AlertDialogDescription>
              Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowDialog(false)}>Cerrar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
