'use client';

import React from 'react';

const Home = () => {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Encabezado principal */}
      <div className="text-[#010D3D] font-black text-[30px] leading-tight mb-4">
        <h1>¿Sabes si tu empresa cumple...</h1>
        <h1>o simplemente sobrevive?</h1>
      </div>

      {/* Subtítulo */}
      <div className="text-[#80869e] text-base mb-4">
        <p>Descubre en 5 minutos tu nivel de madurez en la gestión del cumplimiento</p>
        <p>y las oportunidades ocultas que podrías estar desaprovechando.</p>
      </div>

      {/* Botón */}
      <button className="text-[#010D3D] font-semibold underline mb-8">
        Descarga el test ahora
      </button>

      {/* Bloque de contenido informativo */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold mb-4">¿Qué vas a obtener con este test gratuito?</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Evaluación inmediata en 10 bloques clave.</li>
          <li>Tabla de resultados y niveles de madurez.</li>
          <li>Recomendaciones personalizadas para cada nivel.</li>
          <li>Ideas para mejorar procesos y digitalizar con sentido.</li>
          <li>Documento descargable y compartible con tu equipo o dirección.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
