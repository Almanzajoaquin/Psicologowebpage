import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { Mail, Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Inicio } from './components/Inicio';
import { SobreMi } from './components/SobreMi';
import { ReservarTurno } from './components/ReservarTurno';
import { TeAyudo } from './components/TeAyudo';
import { FAQ } from './components/FAQ';
import { Contacto } from './components/Contacto';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Inicio onNavigate={handleNavigate} />;
      case 'sobre-mi':
        return <SobreMi />;
      case 'reservar-turno':
        return <ReservarTurno />;
      case 'te-ayudo':
        return <TeAyudo />;
      case 'faq':
        return <FAQ />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
        <main className="pt-20">
          {renderSection()}
        </main>
        <footer className="relative bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-900 dark:from-black dark:via-emerald-950 dark:to-black text-white py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Info */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-emerald-300 mb-4">
                  Dra. María Rodríguez
                </h3>
                <p className="text-emerald-200 mb-6">
                  Psicóloga Clínica | MN 12345
                </p>
                <p className="text-stone-300 leading-relaxed">
                  Transformando vidas, un paso a la vez. Comprometida con tu bienestar emocional y crecimiento personal.
                </p>
              </div>

              {/* Contacto */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
                <div className="space-y-3">
                  <p className="flex items-start text-stone-300">
                    <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-emerald-400 mt-0.5" />
                    <span className="text-sm">Av. Santa Fe 1234, Piso 5, Depto B<br />Palermo, Buenos Aires</span>
                  </p>
                  <p className="flex items-center text-stone-300">
                    <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm">+54 11 1234-5678</span>
                  </p>
                  <p className="flex items-center text-stone-300">
                    <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm">dra.rodriguez@psicologia.com</span>
                  </p>
                </div>
              </div>

              {/* Redes Sociales */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Redes Sociales</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/5491112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://instagram.com/dra.maria.rodriguez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 hover:opacity-90 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-emerald-800/50 pt-8 text-center">
              <p className="text-stone-300 text-sm">
                © 2024 Dra. María Rodríguez - Todos los derechos reservados
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}