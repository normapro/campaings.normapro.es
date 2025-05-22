'use client';

import React from 'react';

const TestInfo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid gap-12">
      {/* Sección 2 (lado derecho) */}
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div className="hidden md:block" /> 
        <div>
          <h2 className="text-2xl font-black text-[#010D3D] mb-4">
            ¿Qué vas a obtener con este test gratuito?
          </h2>
          <li>Evaluacion inmediata en 10 bloques clave</li>
          <li>Tebla de resultados y niveles de madurez</li>
          <li>Recomendaciones personalizadas para cada sentido</li>
          <li>Ideas para mejorar procesos y digitalizar con sentido</li>
          <li>Documento descargable y compatible con tu equipo o direccion</li>
        </div>
      </div>

      {/* Sección 3 con fondo azul y contenido centrado */}
      <div className="bg-[#E5F0FF] p-8 rounded-lg text-center">
        <h2 className="text-2xl font-black text-[#010D3D] mb-4">
          Formulario de descarga
        </h2>
        <p className="text-[#4B5563] mb-2">
          Haz clic en el botón y accede a un breve formulario donde podrás completar tus datos.
        </p>
        <p className="text-[#4B5563] mb-6">
          En menos de un minuto recibirás el test completo en tu correo electrónico.
        </p>

        <button className="bg-[#010D3D] text-white font-semibold py-2 px-6 rounded-full border-2 border-[#010D3D] hover:bg-[#0a1b6e] transition">
          Quiero mi test ahora
        </button>
      </div>
    </div>
  );
};

export default TestInfo;
