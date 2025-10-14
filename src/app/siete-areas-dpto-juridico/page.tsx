

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Siete áreas clave de un Departamento Jurídico | NormaPro',
  description:
    'Descubre en menos de 7 minutos qué áreas clave puedes optimizar para ganar influencia, eficiencia y tranquilidad en tu departamento jurídico.',
};

export default function SieteAreasDptoJuridico() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative isolate">
        {/* blobs laterales */}
        <Image
          src="/hielo1.png"
          alt=""
          aria-hidden
          width={800}
          height={800}
          className="pointer-events-none select-none absolute -left-24 -top-24 w-[52vw] max-w-[820px] opacity-80"
          priority
        />
        <Image
          src="/hielo2.png"
          alt=""
          aria-hidden
          width={900}
          height={900}
          className="pointer-events-none select-none absolute -right-24 top-20 w-[56vw] max-w-[900px] opacity-80"
          priority
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-14 pb-20 sm:pt-16 sm:pb-28 text-center">
          <div className="mx-auto w-40 sm:w-48 mb-6">
            <Image
              src="/NormaPro_Horizontal_Color@2x.png"
              width={600}
              height={200}
              alt="NormaPro"
              className="w-full h-auto"
              priority
            />
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0a1535]">
            ¿Está tu modelo de Compliance<br className="hidden sm:block" /> preparado para afrontar los<br className="hidden sm:block" /> retos tecnológicos?
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Un test–assessment para organizaciones que quieren conocer el nivel de
            preparación de su sistema de cumplimiento frente a los nuevos desafíos digitales.
          </p>

          <div className="mt-10">
            {/*}
            <Link
              href="https://campaigns.normapro.es/compliance-digital"
              className="inline-flex items-center rounded-xl bg-[#0a1535] px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              Haz el test ahora
            </Link>
            */}
          </div>
        </div>
      </section>

      {/* INTRO BLOQUE 1 */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-14">
        <p className="text-center text-sm sm:text-base text-slate-700 font-semibold">
          ¿Cuánto tiempo has dedicado este año a mejorar el funcionamiento de tu departamento jurídico?
        </p>

        <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-[#0a1535]">
          No es solo lo que haces, es cómo lo organizas
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          En menos de 7 minutos descubrirás qué áreas clave puedes optimizar para ganar influencia,
          eficiencia y tranquilidad en tu día a día.
        </p>

        <h3 className="mt-10 text-center text-xl sm:text-2xl font-extrabold text-[#0a1535]">
          Un test práctico, diseñado desde la experiencia.
        </h3>
        <div className="mt-3 space-y-4 text-slate-700 leading-relaxed">
          <p>
            Este test ha sido diseñado específicamente para abogados de empresa, no para académicos
            ni consultores externos. Se basa en <b>7 áreas estratégicas</b> que marcan la diferencia entre
            un departamento jurídico funcional… y uno realmente influyente.
          </p>
          <p>
            Te ayudará a obtener una <b>visión clara, ordenada y accionable</b> del estado actual de tu
            departamento jurídico.
          </p>
          <p>
            Una herramienta de reflexión, diagnóstico y mejora que ya utilizan compañías de primer nivel
            para evolucionar su función legal interna.
          </p>
        </div>
      </section>

      {/* TRES FEATURES (estilo cards con borde) */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-slate-200 p-5 bg-white">
            <div className="text-[#6b62ff] font-extrabold">✔︎ DAFO jurídico propio</div>
            <p className="mt-2 text-slate-700 text-sm">
              Evaluación interna que combina fortalezas, debilidades, riesgos y oportunidades
              desde el rol jurídico
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 bg-white">
            <div className="text-[#6b62ff] font-extrabold">✔︎ Basado en el método M.E.J.O.R.A.</div>
            <p className="mt-2 text-slate-700 text-sm">
              Metodología exclusiva que traduce el análisis en planes de acción y seguimiento reales
              con <b>NormaPro</b>
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 bg-white">
            <div className="text-[#6b62ff] font-extrabold">✔︎ Usado por empresas como ASISA, Bosch, Macrosad…</div>
            <p className="mt-2 text-slate-700 text-sm">
              Casos reales en los que ya ha generado impacto en departamentos jurídicos de alto nivel
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE TABLA 7 ÁREAS */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-[#0a1535]">
          Un diagnóstico completo. Una hoja de ruta personalizada.
        </h3>
        <p className="mt-3 text-center text-slate-700 max-w-3xl mx-auto">
          Cada pregunta de este test está alineada con una de estas 7 áreas estratégicas. Juntas, ofrecen
          una visión integral del estado actual del departamento jurídico… y de hacia dónde puede evolucionar.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="bg-[#0a1535] text-white text-sm font-semibold px-4 py-3 grid grid-cols-2">
            <div>Área</div>
            <div>En qué te ayuda</div>
          </div>
          <dl className="divide-y divide-slate-200 bg-white">
            {[
              ['Modelo organizativo', 'Clarificar funciones, estructura y toma de decisiones'],
              ['Dirección general', 'Aumentar influencia estratégica'],
              ['Otras áreas', 'Mejorar la colaboración transversal'],
              ['Visión y KPIs', 'Enfocar y demostrar el valor del departamento'],
              ['Tecnología', 'Ahorrar tiempo, reducir errores y aumentar eficiencia'],
              ['Conocimiento jurídico', 'Capitalizar la experiencia y fomentar la mejora continua'],
              ['Cumplimiento', 'Fortalecer la cultura ética real, no solo formal'],
            ].map(([area, ayuda]) => (
              <div key={area} className="grid grid-cols-1 sm:grid-cols-2">
                <dt className="px-4 py-3 text-slate-900 font-medium">{area}</dt>
                <dd className="px-4 py-3 text-slate-700">{ayuda}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA BLOQUE */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-10">
        <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 sm:p-8 text-center shadow-sm">
          <h4 className="text-xl sm:text-2xl font-extrabold text-[#0a1535]">
            Entra en el ecosistema de los departamentos jurídicos más eficientes.
          </h4>
          <p className="mt-3 text-slate-700">
            Empieza hoy a organizar tu departamento jurídico con una visión más clara y estratégica.
            Puedes hacer el test de forma individual… o replicarlo internamente con tu equipo, para abrir
            conversaciones y construir mejoras reales.
          </p>

          <div className="mt-6">
            <Link
              href="https://campaigns.normapro.es/compliance-digital"
              className="inline-flex items-center rounded-xl bg-[#0a1535] px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              Haz tu test ahora
            </Link>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Tus respuestas son confidenciales. Al terminar el test, recibirás un diagnóstico personalizado
            y podrás descargarte un resumen con ideas prácticas de mejora.
          </p>
        </div>
      </section>

      {/* FOOTER / CLAIM */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
        <p className="text-center text-slate-600">
          <b>Inspirado por quienes ya están evolucionando su función legal interna</b>
        </p>

        <div className="mt-8 text-center text-slate-700 leading-relaxed max-w-3xl mx-auto">
          <p>
            <b>NormaPro</b> es el ecosistema digital de referencia en España para la organización, cumplimiento
            y eficiencia operativa de áreas jurídicas y de compliance.
          </p>
          <p className="mt-3">
            Creado por <b>Instituto de Innovación, Ciencia y Empresa</b>, combina tecnología y experiencia en
            consultoría para ayudarte a ganar control, orden y eficiencia.
          </p>
        </div>
      </section>


      <section className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row text-left mt-10 lg:mt-20 lg:mb-10 gap-8 lg:gap-0">
                      <div className="w-full lg:w-[40%] justify-center">
                        <Image
                          src="/jmgr.jpeg"
                          alt="Juan Manuel Galdón Requena"
                          width={600}
                          height={600}
                          className="rounded-xl mt-0 lg:mt-10 mx-auto w-[60%] lg:w-[75%] h-auto max-w-[300px]"
                        /><br />
                        <p className="text-[14px] lg:text-[16px] font-semibold text-[#010d3d90] mt-4 text-center">
                          juanmanuelgaldon@institutodeinnovacion.es
                        </p>                
                      </div>
                      <div className="lg:ml-10 mt-0 lg:mt-10 w-full lg:max-w-[60%]">
                        <h1 className="text-[20px] sm:text-[24px] lg:text-[30px] font-black mb-6 lg:mb-10 text-center lg:text-left">
                          "Cuando está bien diseñada, la función jurídica, se convierte en el sistema operativo interno de la empresa."
                        </h1>
                        <div className="text-center lg:text-left">
                          <p className="text-[16px] lg:text-[18px] font-bold text-[#010d3d]">Juan Manuel Galdón Requena</p>
                          <p className="text-[14px] lg:text-[16px] font-semibold text-[#010d3d90]">Profesor en Escuela de práctica jurídica de Madrid</p>
                          <Image src="/icononormapro.png" alt="NormaPro" width={50} height={50} className="inline-block mt-4" />
                        </div>
                      </div>
                    </div>
      </section>
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
        <div className="flex flex-col lg:flex-row text-left mt-10 lg:mt-20 mb-20 lg:mb-100 gap-8 lg:gap-0">
                      <div className="w-full lg:w-[40%] justify-center">
                        <Image
                          src="/jarcos.jpeg"
                          alt="Julio Arcos Quesada"
                          width={600}
                          height={600}
                          className="rounded-xl mt-0 lg:mt-10 mx-auto w-[60%] lg:w-[75%] h-auto max-w-[300px]"
                        /><br />
                        <p className="text-[14px] lg:text-[16px] font-semibold text-[#010d3d90] mt-4 text-center">
                          julioarcos@institutodeinnovacion.es
                        </p>                
                      </div>
                      <div className="lg:ml-10 mt-0 lg:mt-10 w-full lg:max-w-[60%]">
                        <h1 className="text-[20px] sm:text-[24px] lg:text-[30px] font-black mb-6 lg:mb-10 text-center lg:text-left">
                          "Cuando la función jurídica deja de ser solo necesaria y se vuelve decisiva, TODO CAMBIA"
                        </h1>
                        <div className="text-center lg:text-left">
                          <p className="text-[16px] lg:text-[18px] font-bold text-[#010d3d]">Julio Arcos Quesada</p>
                          <p className="text-[14px] lg:text-[16px] font-semibold text-[#010d3d90]">Profesor en Escuela de práctica jurídica de Madrid</p>
                          <Image src="/icononormapro.png" alt="NormaPro" width={50} height={50} className="inline-block mt-4" />
                        </div>
                      </div>
                    </div>
      </section>
    </main>
  );
}
