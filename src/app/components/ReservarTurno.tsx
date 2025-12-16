import { useState } from 'react';
import { User, Mail, CreditCard, Video, MapPin, Check } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

export function ReservarTurno() {
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    email: '',
    modalidad: '',
  });
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedHorario, setSelectedHorario] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const horarios = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedHorario) {
      alert('Por favor selecciona una fecha y horario');
      return;
    }
    setSubmitted(true);
    console.log('Reserva:', { ...formData, fecha: selectedDate, horario: selectedHorario });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-slate-900 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-12 text-center border border-stone-200 dark:border-slate-700">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
              <Check className="w-10 h-10 text-emerald-700 dark:text-emerald-400" strokeWidth={3} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">¡Perfecto!</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Tu turno ha sido reservado exitosamente
            </p>
            <div className="bg-stone-50 dark:bg-slate-700/50 rounded-xl p-8 mb-8 text-left border border-stone-200 dark:border-slate-600">
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-xl">Detalles de tu reserva</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <User className="w-5 h-5 text-emerald-700 dark:text-emerald-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Nombre</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{formData.nombre}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 text-emerald-700 dark:text-emerald-400 mr-3 mt-0.5">
                    {formData.modalidad === 'presencial' ? <MapPin className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Modalidad</p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {formData.modalidad === 'presencial' ? 'Presencial' : 'Online'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 text-emerald-700 dark:text-emerald-400 mr-3 mt-0.5">📅</div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Fecha y horario</p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {selectedDate?.toLocaleDateString('es-ES', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })} - {selectedHorario} hs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-8">
              Recibirás un email de confirmación en <span className="font-semibold text-emerald-700 dark:text-emerald-400">{formData.email}</span>
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ nombre: '', dni: '', email: '', modalidad: '' });
                setSelectedDate(undefined);
                setSelectedHorario('');
              }}
              className="bg-emerald-700 text-white px-10 py-4 rounded-lg font-semibold hover:bg-emerald-800 hover:shadow-lg transition-all duration-300"
            >
              Reservar Otro Turno
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">Reservar Turno</h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Completa el formulario para agendar tu sesión
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 md:p-12 border border-stone-200 dark:border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Datos Personales */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-emerald-700 rounded-lg mr-3 flex items-center justify-center text-white">
                  1
                </div>
                Datos Personales
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    <User className="inline w-4 h-4 mr-2 text-emerald-700 dark:text-emerald-400" />
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-stone-50 dark:bg-slate-700 border border-stone-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="dni" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    <CreditCard className="inline w-4 h-4 mr-2 text-emerald-700 dark:text-emerald-400" />
                    DNI
                  </label>
                  <input
                    type="text"
                    id="dni"
                    name="dni"
                    required
                    value={formData.dni}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-stone-50 dark:bg-slate-700 border border-stone-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    placeholder="12345678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <Mail className="inline w-4 h-4 mr-2 text-emerald-700 dark:text-emerald-400" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-stone-50 dark:bg-slate-700 border border-stone-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            {/* Modalidad */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-emerald-700 rounded-lg mr-3 flex items-center justify-center text-white">
                  2
                </div>
                Modalidad
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="relative group cursor-pointer">
                  <input
                    type="radio"
                    name="modalidad"
                    value="presencial"
                    checked={formData.modalidad === 'presencial'}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  <div className={`flex flex-col items-center p-8 border-2 rounded-xl transition-all ${
                    formData.modalidad === 'presencial'
                      ? 'border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 shadow-md'
                      : 'border-stone-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-emerald-500'
                  }`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      formData.modalidad === 'presencial' 
                        ? 'bg-emerald-700' 
                        : 'bg-stone-200 dark:bg-slate-600'
                    }`}>
                      <MapPin className={`w-8 h-8 ${formData.modalidad === 'presencial' ? 'text-white' : 'text-slate-400'}`} />
                    </div>
                    <span className="font-bold text-xl text-slate-900 dark:text-white mb-2">Presencial</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300 text-center">
                      En el consultorio
                    </span>
                  </div>
                </label>

                <label className="relative group cursor-pointer">
                  <input
                    type="radio"
                    name="modalidad"
                    value="online"
                    checked={formData.modalidad === 'online'}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  <div className={`flex flex-col items-center p-8 border-2 rounded-xl transition-all ${
                    formData.modalidad === 'online'
                      ? 'border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 shadow-md'
                      : 'border-stone-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-emerald-500'
                  }`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      formData.modalidad === 'online' 
                        ? 'bg-emerald-700' 
                        : 'bg-stone-200 dark:bg-slate-600'
                    }`}>
                      <Video className={`w-8 h-8 ${formData.modalidad === 'online' ? 'text-white' : 'text-slate-400'}`} />
                    </div>
                    <span className="font-bold text-xl text-slate-900 dark:text-white mb-2">Online</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300 text-center">
                      Videollamada
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Fecha y Horario */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-emerald-700 rounded-lg mr-3 flex items-center justify-center text-white">
                  3
                </div>
                Fecha y Horario
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calendario */}
                <div className="flex justify-center">
                  <div className="calendar-container bg-stone-50 dark:bg-slate-700 p-6 rounded-xl border border-stone-300 dark:border-slate-600">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={{ before: new Date() }}
                      locale={es}
                      className="custom-calendar"
                      modifiersClassNames={{
                        selected: 'selected-day',
                        today: 'today-day',
                      }}
                    />
                  </div>
                </div>

                {/* Horarios */}
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                    Selecciona un horario disponible
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {horarios.map((horario) => (
                      <button
                        key={horario}
                        type="button"
                        onClick={() => setSelectedHorario(horario)}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          selectedHorario === horario
                            ? 'bg-emerald-700 text-white shadow-md'
                            : 'bg-stone-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 hover:bg-stone-200 dark:hover:bg-slate-500'
                        }`}
                      >
                        {horario}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-emerald-700 text-white py-5 px-8 rounded-lg font-bold text-lg hover:bg-emerald-800 hover:shadow-lg transition-all duration-300"
              >
                Confirmar Reserva
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .custom-calendar {
          --rdp-cell-size: 45px;
          --rdp-accent-color: rgb(4 120 87);
          --rdp-background-color: rgb(4 120 87 / 0.1);
          font-family: inherit;
        }
        
        .custom-calendar .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
          background-color: rgb(4 120 87 / 0.1);
        }
        
        .custom-calendar .selected-day {
          background: rgb(4 120 87) !important;
          color: white !important;
          font-weight: bold;
        }
        
        .custom-calendar .today-day:not(.selected-day) {
          font-weight: bold;
          color: rgb(4 120 87);
        }
        
        .custom-calendar .rdp-caption {
          color: rgb(15 23 42);
        }
        
        .dark .custom-calendar .rdp-caption {
          color: white;
        }
        
        .dark .custom-calendar {
          --rdp-accent-color: rgb(16 185 129);
        }
        
        .dark .custom-calendar .rdp-day {
          color: rgb(226 232 240);
        }
        
        .dark .custom-calendar .rdp-day:hover:not([disabled]):not(.rdp-day_selected) {
          background-color: rgb(4 120 87 / 0.2);
        }
      `}</style>
    </div>
  );
}