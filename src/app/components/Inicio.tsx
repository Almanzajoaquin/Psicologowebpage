import { Brain, Heart, Shield, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InicioProps {
  onNavigate: (section: string) => void;
}

export function Inicio({ onNavigate }: InicioProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1735013531564-a419dc5f31ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0aGVyYXB5JTIwY29uc3VsdGF0aW9uJTIwcm9vbXxlbnwxfHx8fDE3NjU4NTMwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Consultorio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/85 via-emerald-900/75 to-slate-900/85 dark:from-slate-950/95 dark:via-emerald-950/90 dark:to-slate-950/95"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-amber-300 mr-3" />
              <span className="text-stone-200 font-semibold">Transformación Personal</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Tu bienestar
              <span className="block text-emerald-300">
                comienza aquí
              </span>
            </h1>
            <p className="text-xl text-stone-200 mb-10 leading-relaxed">
              Un espacio seguro y profesional donde encontrarás las herramientas para alcanzar el equilibrio emocional que mereces
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('reservar-turno')}
                className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 hover:shadow-xl transition-all duration-300"
              >
                Reservar Sesión
              </button>
              <button
                onClick={() => onNavigate('sobre-mi')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Conocer Más
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-stone-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 to-amber-50/30 dark:from-emerald-950/20 dark:to-amber-950/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Sobre Mi Trabajo
            </h2>
            <div className="w-24 h-1 bg-emerald-700 mx-auto rounded mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Mi enfoque terapéutico se centra en crear un espacio donde te sientas comprendido y acompañado en tu proceso de crecimiento personal
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Tratamiento Personalizado</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Cada persona es única, por eso diseño un plan terapéutico específico que se adapta a tus necesidades, ritmo y objetivos personales. No existe un enfoque único para todos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-amber-700 dark:text-amber-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Atención Integral</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Trabajo desde un enfoque holístico que considera todos los aspectos de tu vida: emocional, relacional, y personal. Te acompaño con calidez y profesionalismo en cada sesión.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-slate-700 dark:text-slate-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Espacio Confidencial y Seguro</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Creo un ambiente de absoluta confianza donde puedes expresarte libremente. La confidencialidad y el respeto son pilares fundamentales de mi práctica profesional.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-xl shadow-lg border border-stone-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Mi Metodología</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Primera Sesión</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Nos conocemos y exploramos juntos lo que te trae a terapia. Es un espacio para que te sientas cómodo y podamos establecer los objetivos del tratamiento.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Proceso Terapéutico</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Trabajamos semana a semana con técnicas adaptadas a tu situación. Cada sesión es un paso hacia el cambio que buscas, con tareas y reflexiones entre encuentros.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Seguimiento Continuo</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Evaluamos regularmente tu progreso y ajustamos el tratamiento según sea necesario. Tu bienestar y satisfacción son mi prioridad absoluta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 dark:from-emerald-950 dark:via-emerald-900 dark:to-teal-950"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Da el primer paso hacia tu bienestar
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Agenda tu primera sesión hoy y comienza tu camino hacia una vida más plena y equilibrada
          </p>
          <button
            onClick={() => onNavigate('reservar-turno')}
            className="bg-white text-emerald-800 px-10 py-5 rounded-lg font-bold hover:bg-stone-50 hover:shadow-xl transition-all duration-300"
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}