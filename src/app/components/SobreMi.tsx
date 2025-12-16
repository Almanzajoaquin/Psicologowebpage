import { Award, BookOpen, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SobreMi() {
  return (
    <div className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">Sobre Mi</h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto rounded"></div>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-emerald-200 dark:bg-emerald-900 rounded-xl opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669627961229-987550948857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwc3ljaG9sb2dpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU4NTI5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dra. María Rodríguez"
              className="relative w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-emerald-800 dark:text-emerald-400 mb-6">
              Dra. María Rodríguez
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Psicóloga clínica con más de 10 años de experiencia transformando vidas. Mi pasión es ayudarte a descubrir tu potencial y alcanzar una vida plena y equilibrada.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Creo en un enfoque integral que combina ciencia, empatía y dedicación personalizada para cada persona.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Tu bienestar es mi prioridad, y juntos construiremos el camino hacia la mejor versión de ti mismo.
            </p>
          </div>
        </div>

        {/* Three Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Formación */}
          <div className="relative bg-stone-50 dark:bg-slate-800 p-8 rounded-xl border border-stone-200 dark:border-slate-700 hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mb-6">
              <BookOpen className="w-7 h-7 text-emerald-700 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Formación</h3>
            <ul className="space-y-5 text-slate-600 dark:text-slate-300">
              <li>
                <p className="font-bold text-slate-900 dark:text-white">Licenciatura en Psicología</p>
                <p className="text-sm">Universidad de Buenos Aires (UBA)</p>
                <p className="text-sm text-emerald-700 dark:text-emerald-400">2008 - 2013</p>
              </li>
              <li>
                <p className="font-bold text-slate-900 dark:text-white">Máster en Psicología Clínica</p>
                <p className="text-sm">Universidad de Palermo</p>
                <p className="text-sm text-emerald-700 dark:text-emerald-400">2014 - 2016</p>
              </li>
              <li>
                <p className="font-bold text-slate-900 dark:text-white">Especialización en TCC</p>
                <p className="text-sm">Instituto Beck de Argentina</p>
                <p className="text-sm text-emerald-700 dark:text-emerald-400">2017 - 2018</p>
              </li>
            </ul>
          </div>

          {/* Experiencia */}
          <div className="relative bg-stone-50 dark:bg-slate-800 p-8 rounded-xl border border-stone-200 dark:border-slate-700 hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-lg mb-6">
              <Briefcase className="w-7 h-7 text-amber-700 dark:text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Experiencia</h3>
            <ul className="space-y-5 text-slate-600 dark:text-slate-300">
              <li>
                <p className="font-bold text-slate-900 dark:text-white">Consultorio Privado</p>
                <p className="text-sm">Atención individual y grupal</p>
                <p className="text-sm text-amber-700 dark:text-amber-500">2014 - Presente</p>
              </li>
              <li>
                <p className="font-bold text-slate-900 dark:text-white">Hospital General</p>
                <p className="text-sm">Departamento de Salud Mental</p>
                <p className="text-sm text-amber-700 dark:text-amber-500">2013 - 2018</p>
              </li>
              <li>
                <p className="font-bold text-slate-900 dark:text-white">Docente Universitaria</p>
                <p className="text-sm">Cátedra de Psicología Clínica</p>
                <p className="text-sm text-amber-700 dark:text-amber-500">2016 - Presente</p>
              </li>
            </ul>
          </div>

          {/* Enfoque */}
          <div className="relative bg-stone-50 dark:bg-slate-800 p-8 rounded-xl border border-stone-200 dark:border-slate-700 hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-200 dark:bg-slate-700 rounded-lg mb-6">
              <Award className="w-7 h-7 text-slate-700 dark:text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Enfoque</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-700 dark:text-emerald-400 mr-2 font-bold">•</span>
                <span>Terapia Cognitivo-Conductual (TCC)</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-700 dark:text-emerald-400 mr-2 font-bold">•</span>
                <span>Terapia de Aceptación y Compromiso (ACT)</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-700 dark:text-emerald-400 mr-2 font-bold">•</span>
                <span>Mindfulness y Gestión Emocional</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-700 dark:text-emerald-400 mr-2 font-bold">•</span>
                <span>Terapia Basada en Evidencia</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-700 dark:text-emerald-400 mr-2 font-bold">•</span>
                <span>Enfoque Humanista</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}