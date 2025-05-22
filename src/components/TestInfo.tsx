'use client';

import React from 'react';

const TestInfo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid gap-12">
      {/* Sección 2 */}
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div>
          <h2 className="text-2xl font-black text-[#010D3D] mb-4">
            ¿Qué es este test y para quién está pensado?
          </h2>
          <p className="text-[#4B5563] mb-2">
            Este test ha sido diseñado para ayudar a empresarios, compliance officers, responsables de calidad, medio ambiente, PRL, dirección general y otros profesionales clave a identificar su punto de partida en la gestión del cumplimiento.
          </p>
          <p className="text-[#4B5563]">
            En solo unos minutos, podrás visualizar tus puntos fuertes, detectar tus principales debilidades y empezar a definir una hoja de ruta hacia una gestión interna más eficiente, trazable y alineada con los objetivos del negocio.
          </p>
        </div>
      </div>

      {/* Sección 3 */}
      <div className="bg-[#CFE3FF] p-8 rounded-lg text-center">
        <div>
          <h2 className="text-2xl font-black text-[#010D3D] mb-4">
            Formulario de descarga
          </h2>
          <p className="text-[#4B5563] mb-2">
            Haz clic en el botón y accede a un breve formulario donde podrás completar tus datos.
          </p>
          <p className="text-[#4B5563] mb-4">
            En menos de un minuto recibirás el test completo en tu correo electrónico.
          </p>

          <button className="bg-[#010D3D] text-white font-semibold py-2 px-6 rounded-full border-2 border-[#010D3D] hover:bg-[#0a1b6e] transition">
            Quiero mi test ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestInfo;