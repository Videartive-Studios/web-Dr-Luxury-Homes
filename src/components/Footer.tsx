import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const footerSections = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Propiedades", href: "#propiedades" },
      { label: "Amenidades", href: "#amenidades" },
      { label: "Inversión", href: "#inversion" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Galería", href: "#galeria" },
      { label: "Contacto", href: "#contacto" }
    ]
  },
  {
    title: "Enlaces Útiles",
    links: [
      { label: "Acerca de Nosotros", href: "#nosotros" },
      { label: "Preguntas Frecuentes", href: "#" },
      { label: "Aviso de Privacidad", href: "#" },
      { label: "Términos y Condiciones", href: "#" },
      { label: "Mapa del Sitio", href: "#" },
      { label: "Trabaja con Nosotros", href: "#" },
      { label: "Noticias/Blog", href: "#" }
    ]
  },
  {
    title: "Destinos",
    links: [
      { label: "Puerto Vallarta", href: "#" },
      { label: "Marina Vallarta", href: "#" },
      { label: "Zona Hotelera Norte", href: "#" },
      { label: "Conchas Chinas", href: "#" },
      { label: "Punta Cana", href: "#" },
      { label: "Bávaro", href: "#" }
    ]
  }
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/drluxuryhomes",
    label: "Facebook"
  },
  {
    icon: Instagram,
    href: "https://instagram.com/drluxuryhomes",
    label: "Instagram"
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@drluxuryhomes",
    label: "YouTube"
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold">
                <span className="text-yellow-500">Dr</span> Luxury Homes
              </h3>
              <p className="text-gray-400 mt-2">
                Tu socio de confianza en inversiones inmobiliarias de lujo
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-yellow-500" />
                <a href="tel:+573135741413" className="hover:text-white transition-colors">
                  (57) 313 574 1413
                </a>
              </div>
              
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-yellow-500" />
                <a href="mailto:info@drluxuryhomes.com" className="hover:text-white transition-colors">
                  info@drluxuryhomes.com
                </a>
              </div>
              
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0" />
                <div>
                  <p>Marina Vallarta, Jalisco, México</p>
                  <p className="mt-1">Bávaro, Punta Cana, R.D.</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6 text-yellow-500">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © Copyright {currentYear} Dr Luxury Homes. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Términos de Uso
              </a>
              <span>|</span>
              <a 
                href="https://wa.me/573135741413" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/573135741413"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
          aria-label="Contactar por WhatsApp"
        >
          <svg 
            className="w-8 h-8" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}