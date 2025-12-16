import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto dura cada sesión?',
      answer: 'Cada sesión tiene una duración de 50 minutos. Este tiempo nos permite trabajar de manera profunda y efectiva en tus objetivos terapéuticos.',
    },
    {
      question: '¿Cuál es el costo de la consulta?',
      answer: 'El costo de la sesión varía según la modalidad. Para conocer las tarifas actualizadas, por favor contáctame directamente. Acepto obras sociales y ofrezco planes de pago flexibles.',
    },
    {
      question: '¿Cuántas sesiones necesitaré?',
      answer: 'La duración del tratamiento varía según cada persona y sus objetivos. Algunas personas notan mejorías en pocas sesiones, mientras que otras prefieren un proceso más largo. Lo evaluaremos juntos según tu progreso.',
    },
    {
      question: '¿Qué diferencia hay entre presencial y online?',
      answer: 'Ambas modalidades son igualmente efectivas. La terapia presencial se realiza en el consultorio, mientras que la online se hace por videollamada desde la comodidad de tu hogar. La elección depende de tu preferencia y disponibilidad.',
    },
    {
      question: '¿Es confidencial lo que hablamos en terapia?',
      answer: 'Absolutamente. Todo lo que se comparte en terapia es estrictamente confidencial. La privacidad y el secreto profesional son fundamentales en mi práctica, excepto en situaciones de riesgo grave que requieran intervención.',
    },
    {
      question: '¿Cómo sé si necesito terapia?',
      answer: 'Si sientes que algo en tu vida no está bien, experimentas malestar emocional persistente, o simplemente quieres conocerte mejor y crecer como persona, la terapia puede ayudarte. No necesitas estar en crisis para beneficiarte de ella.',
    },
    {
      question: '¿Qué debo hacer para la primera sesión?',
      answer: 'No necesitas preparar nada especial. Solo ven con disposición a hablar sobre lo que te trae a terapia. En la primera sesión, te haré algunas preguntas para conocerte mejor y juntos evaluaremos cómo trabajar.',
    },
    {
      question: '¿Puedo cancelar o reprogramar un turno?',
      answer: 'Sí, puedes cancelar o reprogramar tu turno avisando con al menos 24 horas de anticipación. Esto me permite ofrecer ese horario a otro paciente que lo necesite.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-stone-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">Preguntas Frecuentes</h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Aquí encontrarás respuestas a las dudas más comunes
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden border border-stone-200 dark:border-slate-700 hover:shadow-lg transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-stone-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <span className="font-bold text-slate-900 dark:text-white pr-4 text-lg">{faq.question}</span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  openIndex === index 
                    ? 'bg-emerald-700' 
                    : 'bg-stone-200 dark:bg-slate-600'
                }`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-300" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-stone-200 dark:border-slate-700">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-xl p-8 text-center shadow-md">
          <div className="text-5xl mb-4">💬</div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Si no encontraste la respuesta que buscabas, no dudes en contactarme directamente. Estaré encantada de resolver todas tus dudas.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 hover:shadow-lg transition-all duration-300"
          >
            Contactarme
          </a>
        </div>
      </div>
    </div>
  );
}
