'use client';

import React from 'react';
import Image from 'next/image';
import image1 from '../../public/imagenSeccion21.svg';
import image2 from '../../public/imagenSeccion32.svg';
import image3 from '../../public/imagenSeccion23.png';

const TestInfo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid gap-12">

      {/* Sección 2 */}
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div className="relative w-full max-w-[350px] h-auto mx-auto">
          {/* Imagen 3 de fondo */}
          <Image
            src={image3}
            alt="Fondo"
            className="w-full h-auto relative z-0"
          />
          {/* Imagen 1 superpuesta */}
          <Image
            src={image1}
            alt="¿Qué vas a obtener?"
            className="absolute top-12 left-20 w-full h-auto max-w-[230px] z-10"
          />
        </div>

        <div>
          <h2 className="text-3xl font-black text-[#010D3D] mb-4">
            ¿Qué vas a obtener con este test gratuito?
          </h2>
          <ul className="list-disc pl-5 text-[#4B5563] space-y-1">
            <li>Evaluación inmediata en 10 bloques clave.</li>
            <li>Tabla de resultados y niveles de madurez.</li>
            <li>Recomendaciones personalizadas para cada sentido.</li>
            <li>Ideas para mejorar procesos y digitalizar con sentido.</li>
            <li>Documento descargable y compartible con tu equipo o dirección.</li>
          </ul>
        </div>
      </div>

      {/* Sección 3 */}
      <div className="bg-[#E5F0FF] p-8 rounded-lg text-center mt-16">
        <div className="mb-6 flex justify-center">
          <Image
            src={image2}
            alt="Formulario"
            className="w-full h-auto max-w-[150px]"
          />
        </div>
        <h2 className="text-3xl font-black text-[#010D3D] mb-4">
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
