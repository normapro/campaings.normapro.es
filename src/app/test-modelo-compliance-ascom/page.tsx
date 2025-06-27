'use client';

import React, { useState } from 'react';
import ModalFormulario from '@/components/ModalFormulario';
import Link from 'next/link';

import Image from 'next/image';


export default function PageTestMadurezCumplimiento() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div >
      <ModalFormulario visible={isModalOpen} onClose={handleCloseModal} />
      
      {/* Hero 
      <header className="bg-white  top-0 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center ">
        <Link href="https://normapro.es" className="flex items-center justify-center">
          <Image
            src="/NormaPro_Horizontal_Color@2x.png"
            alt="NormaPro"
            width={240}
            height={60}
            className="h-auto w-auto"
            priority
          />
        </Link>
        <h1 className="text-[45px] font-black">ASCOM</h1>
      </div>      
    </header>
    */}
    <div className="absolute top-20 z-0 overflow-hidden w-full">
          <Image
            src="/hielo1.png"
            alt="Fondo del test de madurez de cumplimiento"
            width={306}
            height={412}
            className="w-[600px] relative ml-[-120px] h-auto z-0 float-left"
          />
          <Image
            src="/hielo2.png"
            alt="Fondo del test de madurez de cumplimiento"
            width={306}
            height={412}
            className="w-[500px] relative float-right mr-[-150px] mt-[450px] h-auto z-0"
          />
      </div>
      <div className="max-w-6xl mx-auto w-full">
      <section className=" items-center justify-center text-center py-20 relative z-10">
        <div className="z-1 relative text-left space-y-4 mt-10 space-y-12">
          <h1 className="text-[45px] font-black max-w-3xl">
            ¿Está tu modelo de Compliance preparado para afrontar los retos tecnológicos?
          </h1>
          <div className='flex justify-center items-center w-full'>
            <div className="flex-col">
                <p className="text-[24px] font-bold text-[#010d3d] ">
                  Una herramienta exclusiva presentada en el Congreso organizado por ASCOM para ayudarte a reflexionar, evaluar y avanzar con inteligencia.
                </p>
                 <p className="text-[18px] font-bold text-[#010d3d90] mt-10">
                  Porque la transformación tecnológica no empieza con la tecnología… empieza con un modelo de Compliance sólido, trazable y alineado con el negocio.
                </p>                
            </div>
          
        
          <div className="flex-col w-full mx-auto text-center">
            <Image
              src="/congreso-ascom.png"
              alt="Fondo del test de madurez de cumplimiento"
              width={400}
              height={400}
              className="rounded-xl h-[400px] w-[400px] mx-auto"
            />
          </div>
          </div>
        </div>
        
      </section>
      <section className="pr-10">
        <div>
          <p className="text-[18px] font-bold text-[#010d3d90]">Este test ha sido diseñado específicamente para los profesionales que asistís al Congreso ASCOM "Compliance en la Actividad Empresarial 2025" con el objetivo de facilitar una reflexión estructurada sobre el estado de vuestro sistema de cumplimiento y su preparación para afrontar los desafíos tecnológicos.</p>
          <p className="text-[18px] font-bold mt-8 text-[#010d3d]">No es una auditoría.<br></br>Es una herramienta de autodiagnóstico, práctica y orientada a la acción.</p>
        </div>
      </section>
      <section className="pr-10 mt-20">
        <div className="flex">
          <div className="w-1/2 mx-auto text-center">
            <div className="w-full bg-contain bg-no-repeat bg-center rounded-lg overflow-hidden bg-[url('/hielo2.png')] px-10 py-5 mx-auto ">
            <Image
              src="/imagenSeccion21.svg"
              alt="Test de madurez de cumplimiento"
              width={600}
              height={400}
              className="w-full h-auto px-[20%]"

            />
            </div>
          </div>
          
          <div className="w-1/2">          
            <h2 className="text-[30px] font-black">¿Qué encontrarás en este test?</h2>
            <ul className="list-disc list-inside space-y-1 mt-10 list-none">
              <li><span className="text-[#010d3d] mr-3 mt-1">✓</span> Evalúas tu nivel actual en 6 áreas clave del modelo de compliance</li>
              <li><span className="text-[#010d3d] mr-3 mt-1">✓</span> Detectas puntos débiles y oportunidades de mejora</li>
              <li><span className="text-[#010d3d] mr-3 mt-1">✓</span> Obtienes una hoja de ruta práctica para avanzar</li>
              <li><span className="text-[#010d3d] mr-3 mt-1">✓</span> Conectas el cumplimiento con la eficiencia y la transformación digital</li>
              <li><span className="text-[#010d3d] mr-3 mt-1">✓</span> Accedes a un contenido útil para compartir y debatir con tu equipo</li>
            </ul>
          </div>
          
          
        </div>
      </section>

      <section className='mt-20 w-full text-center'>
           <Link href="/Test-Modelo-de-Compliance.pdf">
           <button className="bg-[#010d3d] text-white px-4 py-4 rounded-xl font-bold mx-auto mt-15 cursor-pointer hover:bg-[#010d3d90] transition-colors duration-300">
                  Descarga aquí el test completo en PDF
            </button>
            </Link>
            <div className="flex text-left mt-20 mb-100">
              <div className="w-[40%]">
                <Image
                  src="/jmgr.jpeg"
                  alt="Juan Manuel Galdón Requena"
                  width={600}
                  height={600}
                  className="rounded-xl mt-10 mx-auto w-[75%] h-auto"
                />                
              </div>
              <div className="ml-10 mt-10 max-w-[60%]">
                <h1 className="text-[30px] font-black mb-10">
                  “El cumplimiento no es un obstáculo. Es el nuevo sistema operativo de las empresas que quieren competir en serio.”
                </h1>
                <p className="text-[18px] font-bold text-[#010d3d]">Juan Manuel Galdón Requena</p>
                <p className="text-[16px] font-semibold text-[#010d3d90]">Ponente en el Congreso ASCOM 2025</p>
                
              </div>
            </div>

      </section>
    

    </div>
    </div>
  );
}