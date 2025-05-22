'use client';

import React from 'react';
import TestInfo from './TestInfo'; // Asegúrate de que la ruta sea correcta

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

      {/* Componente TestInfo */}
      <TestInfo />
    </div>
  );
};

export default Home;
