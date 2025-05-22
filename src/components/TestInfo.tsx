'use client';

import React from 'react';
import Image from 'next/image';

const TestInfo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid gap-12">
      {/* Sección 1 */}
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

      {/* Sección 2 */}
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div>
          <h2 className="text-2xl font-black text-[#010D3D] mb-4">
            ¿Qué vas a obtener con este test gratuito?
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[#4B5563]">
            <li>Evaluación inmediata en 10 bloques clave.</li>
            <li>Tabla de resultados y niveles de madurez.</li>
            <li>Recomendaciones personalizadas para cada nivel.</li>
            <li>Ideas para mejorar procesos y digitalizar con sentido.</li>
            <li>Documento descargable y compartible con tu equipo o dirección.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestInfo;
