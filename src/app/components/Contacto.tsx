import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';

export function Contacto() {
  return (
    <div className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Contacto</h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Estoy aquí para ayudarte. Contáctame por cualquiera de estos medios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start bg-stone-50 dark:bg-slate-800 p-6 rounded-xl border border-stone-200 dark:border-slate-700 hover:shadow-md transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <Phone className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Teléfono</h4>
                  <p className="text-slate-600 dark:text-slate-300">+54 11 1234-5678</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Lunes a Viernes 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start bg-stone-50 dark:bg-slate-800 p-6 rounded-xl border border-stone-200 dark:border-slate-700 hover:shadow-md transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-700 dark:text-amber-500" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">dra.rodriguez@psicologia.com</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Respondo en 24-48 horas</p>
                </div>
              </div>

              <div className="flex items-start bg-stone-50 dark:bg-slate-800 p-6 rounded-xl border border-stone-200 dark:border-slate-700 hover:shadow-md transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-sky-700 dark:text-sky-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Consultorio</h4>
                  <p className="text-slate-600 dark:text-slate-300">Av. Santa Fe 1234, Piso 5, Depto B</p>
                  <p className="text-slate-600 dark:text-slate-300">Palermo, Buenos Aires</p>
                </div>
              </div>

              <div className="flex items-start bg-stone-50 dark:bg-slate-800 p-6 rounded-xl border border-stone-200 dark:border-slate-700 hover:shadow-md transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg">
                    <Clock className="w-6 h-6 text-slate-700 dark:text-slate-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Horarios de Atención</h4>
                  <div className="text-slate-600 dark:text-slate-300 space-y-1">
                    <p>Lunes a Viernes: 9:00 - 19:00</p>
                    <p>Sábados: 9:00 - 13:00</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Turnos con cita previa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-stone-100 dark:bg-slate-700 rounded-xl h-64 flex items-center justify-center border border-stone-200 dark:border-slate-600">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-emerald-700 dark:text-emerald-400 mx-auto mb-2" />
                <p className="text-slate-500 dark:text-slate-400 font-semibold">Ubicación del consultorio</p>
              </div>
            </div>
          </div>

          {/* Social Contact */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">Redes Sociales</h3>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <MessageCircle className="w-9 h-9 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">WhatsApp</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-1">
                      Escribime para consultas o reservar tu turno
                    </p>
                    <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      +54 11 1234-5678
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-700 dark:text-emerald-400 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/dra.maria.rodriguez"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gradient-to-br from-rose-50 to-amber-50 dark:from-rose-900/20 dark:to-amber-900/20 p-8 rounded-xl border-2 border-rose-200 dark:border-rose-800 hover:border-rose-400 dark:hover:border-rose-600 hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Instagram className="w-9 h-9 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Instagram</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-1">
                      Seguime para consejos y contenido sobre bienestar
                    </p>
                    <p className="text-sm font-semibold text-rose-700 dark:text-rose-400">
                      @dra.maria.rodriguez
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-700 dark:text-rose-400 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}