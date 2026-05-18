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
      <div className="absolute top-20 z-0 overflow-hidden w-full hidden lg:block">
        <Image
          src="/hielo1.png"
          alt="Fondo del test de madurez de cumplimiento"
          width={306}
          height={412}
          className="w-[400px] lg:w-[600px] relative ml-[-120px] h-auto z-0 float-left"
        />
        <Image
          src="/hielo2.png"
          alt="Fondo del test de madurez de cumplimiento"
          width={306}
          height={412}
          className="w-[300px] lg:w-[500px] relative float-right mr-[-150px] mt-[450px] h-auto z-0"
        />
      </div>
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <section className=" items-center justify-center text-center py-10 lg:py-20 relative z-10">
          <div className="z-1 relative text-left space-y-4 mt-5 lg:mt-10 space-y-6 lg:space-y-12">
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] font-black max-w-3xl">
              ¿Puedes demostrar que tu sistema de Compliance funciona de verdad?
            </h1>
            <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-8 lg:gap-0'>
              <div className="flex-col">
                <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#010d3d] ">
                  Una herramienta práctica presentada en el Congreso de ASCOM para ayudarte a reflexionar, evaluar y detectar oportunidades reales de mejora en tu sistema de Compliance.
                </p>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-[#010d3d90] mt-6 lg:mt-10">
                  Porque hoy ya no basta con tener un sistema. La diferencia está en poder <strong>medirlo, explicarlo, demostrarlo y mejorarlo con criterio.</strong>
                </p>
              </div>


              <div className="flex-col w-full mx-auto text-center ">
                <Image
                  src="/congreso-ascom.png"
                  alt="Fondo del test de madurez de cumplimiento"
                  width={400}
                  height={400}
                  className="rounded-xl h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] mx-auto"
                />
              </div>
            </div>
          </div>

        </section>
        <section className="pr-4 lg:pr-10">
          <div>
            <p>Un test diseñado para profesionales de Compliance</p>
            <p>Este test ha sido preparado específicamente para los asistentes al Congreso ASCOM con un objetivo muy concreto:</p>
            <p>Ayudarte a valorar si tu sistema de Compliance está realmente en condiciones de demostrar su eficacia, aportar información útil a la dirección y evolucionar con una lógica sólida de medición, monitorización y mejora.</p>
            <p>No es una auditoría. No es una certificación.<br></br>Es una herramienta de autodiagnóstico, práctica y orientada a la acción.</p>
          </div>
        </section>
        <section className="pr-4 lg:pr-10 mt-10 lg:mt-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            <div className="w-full lg:w-1/2 mx-auto text-center order-2 lg:order-1">
              <div className="w-full bg-contain bg-no-repeat bg-center rounded-lg overflow-hidden bg-[url('/hielo2.png')] px-6 lg:px-10 py-5 mx-auto ">
                <Image
                  src="/imagenSeccion21.svg"
                  alt="Test de madurez de cumplimiento"
                  width={600}
                  height={400}
                  className="w-full h-auto px-[10%] lg:px-[20%]"

                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:ml-10 order-1 lg:order-2">
              <h2 className="text-[24px] lg:text-[30px] font-black">¿Qué encontrarás en este test?</h2>
              <ul className="list-disc list-inside space-y-2 lg:space-y-1 mt-6 lg:mt-10 list-none">
                <li className="flex items-start"><span className="text-[#010d3d] mr-3 mt-1 flex-shrink-0">✓</span><span className="text-[14px] lg:text-[16px]">Evalúas tu sistema en <strong>6 dimensiones clave.</strong></span></li>
                <li className="flex items-start"><span className="text-[#010d3d] mr-3 mt-1 flex-shrink-0">✓</span><span className="text-[14px] lg:text-[16px]">Detectas si tu sistema <strong>demuestra eficacia real.</strong></span></li>
                <li className="flex items-start"><span className="text-[#010d3d] mr-3 mt-1 flex-shrink-0">✓</span><span className="text-[14px] lg:text-[16px]">Identificas <strong>puntos ciegos y oportunidades de mejora.</strong></span></li>
                <li className="flex items-start"><span className="text-[#010d3d] mr-3 mt-1 flex-shrink-0">✓</span><span className="text-[14px] lg:text-[16px]">Obtienes una lectura del nivel en el que se encuentra hoy tu sistema.</span></li>
                <li className="flex items-start"><span className="text-[#010d3d] mr-3 mt-1 flex-shrink-0">✓</span><span className="text-[14px] lg:text-[16px]">Accedes a orientaciones útiles para seguir evolucionando.</span></li>
              </ul>
              <p>Hazlo con calma, compártelo con tu equipo y utilízalo como punto de partida para revisar tu sistema con otra mirada.</p>
            </div>


          </div>
        </section>

        <section className='mt-10 lg:mt-20 w-full text-center px-4'>
          <Link href="https://api.danubio.normapro.es/apps/test-modelo-compliance-ascom/">
            <button className="bg-[#010d3d] text-white px-4 py-4 rounded-xl font-bold mx-auto cursor-pointer hover:bg-[#010d3d90] transition-colors duration-300 text-[14px] lg:text-[16px]">
              Descarga aquí el test completo en PDF
            </button>
          </Link>
          <div className="flex flex-col lg:flex-row text-left mt-10 lg:mt-20 mb-20 lg:mb-100 gap-8 lg:gap-0">
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
                "La cuestión ya no es si el sistema existe. La cuestión es si puedes demostrar que funciona."
              </h1>
              <div className="text-center lg:text-left">
                <p className="text-[16px] lg:text-[18px] font-bold text-[#010d3d]">Juan Manuel Galdón Requena</p>
                <p className="text-[14px] lg:text-[16px] font-semibold text-[#010d3d90]">Instituto de Innovación, Ciencia y Empresa</p>
                <Image src="/icononormapro.png" alt="NormaPro" width={50} height={50} className="inline-block mt-4" />
              </div>
            </div>
          </div>

        </section>


      </div>
    </div>
  );
}