import { Heart, Users, Brain, Smile, Moon, Zap } from 'lucide-react';

export function TeAyudo() {
  const servicios = [
    {
      icon: Brain,
      title: 'Ansiedad y Estrés',
      description: 'Técnicas especializadas para gestionar la ansiedad, recuperar la calma y encontrar equilibrio en tu día a día.',
      color: 'emerald',
    },
    {
      icon: Heart,
      title: 'Depresión',
      description: 'Acompañamiento profesional para superar la depresión, recuperar la motivación y redescubrir el sentido de tu vida.',
      color: 'rose',
    },
    {
      icon: Users,
      title: 'Relaciones',
      description: 'Mejora tus vínculos interpersonales, establece límites saludables y construye relaciones más auténticas.',
      color: 'sky',
    },
    {
      icon: Smile,
      title: 'Autoestima',
      description: 'Fortalece tu autoestima, desarrolla confianza en ti mismo y construye una imagen personal positiva.',
      color: 'amber',
    },
    {
      icon: Moon,
      title: 'Trauma y Duelo',
      description: 'Procesamiento de experiencias difíciles y pérdidas significativas en un entorno seguro y contenedor.',
      color: 'slate',
    },
    {
      icon: Zap,
      title: 'Crisis Vitales',
      description: 'Herramientas para afrontar cambios importantes en tu vida con resiliencia y claridad.',
      color: 'teal',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { icon: string; bg: string }> = {
      emerald: {
        icon: 'text-emerald-700 dark:text-emerald-400',
        bg: 'bg-emerald-100 dark:bg-emerald-900/30',
      },
      rose: {
        icon: 'text-rose-700 dark:text-rose-400',
        bg: 'bg-rose-100 dark:bg-rose-900/30',
      },
      sky: {
        icon: 'text-sky-700 dark:text-sky-400',
        bg: 'bg-sky-100 dark:bg-sky-900/30',
      },
      amber: {
        icon: 'text-amber-700 dark:text-amber-400',
        bg: 'bg-amber-100 dark:bg-amber-900/30',
      },
      slate: {
        icon: 'text-slate-700 dark:text-slate-400',
        bg: 'bg-slate-200 dark:bg-slate-700',
      },
      teal: {
        icon: 'text-teal-700 dark:text-teal-400',
        bg: 'bg-teal-100 dark:bg-teal-900/30',
      },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Áreas de Especialización</h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ofrezco acompañamiento profesional y empático en las siguientes áreas de la salud mental y el bienestar emocional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon;
            const colorClasses = getColorClasses(servicio.color);
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-stone-200 dark:border-slate-700"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.bg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${colorClasses.icon}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{servicio.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{servicio.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-br from-stone-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 rounded-xl p-12 md:p-16 border border-stone-200 dark:border-slate-700">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Mi Enfoque Terapéutico</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-slate-700/50 p-8 rounded-xl border border-stone-200 dark:border-slate-600 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔬</span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">Basado en Evidencia</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Utilizo técnicas científicamente validadas como la Terapia Cognitivo-Conductual y Mindfulness, adaptándolas siempre a tus necesidades específicas.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700/50 p-8 rounded-xl border border-stone-200 dark:border-slate-600 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">Atención Personalizada</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Cada persona es única. Diseño un plan terapéutico exclusivo para ti, considerando tu historia, valores y metas personales.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700/50 p-8 rounded-xl border border-stone-200 dark:border-slate-600 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-sky-100 dark:bg-sky-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">Espacio Seguro</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Un ambiente libre de juicios donde puedes expresarte con total confianza. La confidencialidad y el respeto son fundamentales.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700/50 p-8 rounded-xl border border-stone-200 dark:border-slate-600 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">Progreso Medible</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Establecemos objetivos claros y evaluamos tu progreso regularmente, asegurando que avanzamos en la dirección correcta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}