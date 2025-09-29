import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Inicio',
    'Propiedades', 
    'Amenidades',
    'Inversion',
    'Nosotros',
    'Galeria',
    'Contacto'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-white">
              <span className="text-yellow-500">Dr</span> Luxury Homes
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-yellow-500 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              className="bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 font-semibold px-6"
              onClick={() => window.open('https://wa.me/13473602417', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contáctanos
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-yellow-500 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-yellow-500/20">
            <nav className="py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-white hover:text-yellow-500 transition-colors duration-300 font-medium px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 font-semibold"
                  onClick={() => {
                    window.open('https://wa.me/13473602417', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contáctanos
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}