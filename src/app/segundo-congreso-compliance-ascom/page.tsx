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
        <section className="items-center justify-center text-center py-10 lg:py-16 relative z-10">
          <div className="relative mt-5 lg:mt-8 space-y-6 lg:space-y-10">
            <h1 className="text-[28px] sm:text-[48px] lg:text-[56px] leading-tight font-black max-w-5xl mx-auto mb-16">
              ¿Puedes demostrar que tu sistema de Compliance funciona de verdad?
            </h1>
            <div className='w-full space-y-6 lg:space-y-8'>
              <p className="text-[18px] sm:text-[21px] lg:text-[28px] leading-tight font-black text-[#010d3d] max-w-5xl mx-auto mb-12">
                Una herramienta práctica presentada en el Congreso de ASCOM para ayudarte a reflexionar, evaluar y detectar oportunidades reales de mejora en tu sistema de Compliance.
              </p>
              <p className="text-[15px] sm:text-[18px] lg:text-[24px] leading-snug font-medium text-[#010d3d90] text-center max-w-5xl mx-auto">
                Porque hoy ya no basta con tener un sistema.<br />La diferencia está en poder <strong className="text-[#44546A]">medirlo, explicarlo, demostrarlo y mejorarlo con criterio.</strong>
              </p>

              <div className="w-full mx-auto text-center pt-2 lg:pt-4">
                <Image
                  src="/segundoCongreso.png"
                  alt="Fondo del test de madurez de cumplimiento"
                  width={900}
                  height={600}
                  className="rounded-xl w-full max-w-[860px] h-auto mx-auto"
                />
              </div>
            </div>
          </div>

        </section>
        <section className="px-4 lg:px-10 mt-8 lg:mt-12 mb-30">
          <div className="max-w-5xl mx-auto text-center lg:text-left text-[#010d3d] space-y-4">
            <p className="text-[28px] font-black leading-tight mb-8">Un test diseñado para profesionales de Compliance</p>
            <p className="text-[20px] lg:text-[25px] leading-snug mb-8">
              Este test ha sido preparado específicamente para los asistentes al Congreso ASCOM
              con un objetivo muy concreto:
            </p>
            <p className="text-[20px] lg:text-[26px] leading-snug font-black mb-8">
              Ayudarte a valorar si tu sistema de Compliance está realmente en condiciones
              de demostrar su eficacia, aportar información útil a la dirección y evolucionar
              con una lógica sólida de medición, monitorización y mejora.
            </p>
            <p className="text-[20px] lg:text-[25px] leading-snug mb-8">
              No es una auditoría.<br />
              No es una certificación.<br />
              <span className="block text-[20px] lg:text-[26px] leading-snug font-black">
                Es una herramienta de autodiagnóstico, práctica y orientada a la acción.
              </span>
            </p>
          </div>
        </section>
        <section className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 px-4 lg:px-10 mt-14 lg:mt-20  flex items-certer">
          <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="w-full lg:w-[38%] mx-auto text-center order-2 lg:order-1">
              <div className="w-full rounded-lg overflow-hidden px-6 lg:px-2 py-3 mx-auto bg-[url('/hielo2.png')] bg-contain bg-no-repeat bg-center">
                <Image
                  src="/imagenSeccion21.svg"
                  alt="Test de madurez de cumplimiento"
                  width={400}
                  height={300}
                  className="h-auto"

                />
              </div>
            </div>

            <div className="w-full lg:w-[62%] order-1 lg:order-2 text-center lg:text-left pl-0 lg:pl-30">
              <h2 className="text-[38px] lg:text-[46px] xl:text-[52px] leading-tight font-black text-[#010d3d] lg:whitespace-nowrap">¿Qué encontrarás en este test?</h2>
              <ul className="space-y-2 mt-6 lg:mt-8 list-none text-[#010d3d] max-w-[560px] mx-auto lg:max-w-none lg:mx-0">
                <li className="flex items-start justify-center lg:justify-start"><span className="mr-3 mt-1.5 flex-shrink-0 text-[12px]">✓</span><span className="text-[17px] lg:text-[24px] leading-snug text-left">Evalúas tu sistema en <strong className="font-extrabold">6 dimensiones clave.</strong></span></li>
                <li className="flex items-start justify-center lg:justify-start"><span className="mr-3 mt-1.5 flex-shrink-0 text-[12px]">✓</span><span className="text-[17px] lg:text-[24px] leading-snug text-left">Detectas si tu sistema <strong className="font-extrabold">demuestra eficacia real.</strong></span></li>
                <li className="flex items-start justify-center lg:justify-start"><span className="mr-3 mt-1.5 flex-shrink-0 text-[12px]">✓</span><span className="text-[17px] lg:text-[24px] leading-snug text-left">Identificas <strong className="font-extrabold">puntos ciegos y oportunidades de mejora.</strong></span></li>
                <li className="flex items-start justify-center lg:justify-start"><span className="mr-3 mt-1.5 flex-shrink-0 text-[12px]">✓</span><span className="text-[17px] lg:text-[24px] leading-snug text-left">Obtienes una lectura del nivel en el que se encuentra hoy tu sistema.</span></li>
                <li className="flex items-start justify-center lg:justify-start"><span className="mr-3 mt-1.5 flex-shrink-0 text-[12px]">✓</span><span className="text-[17px] lg:text-[24px] leading-snug text-left">Accedes a orientaciones útiles para seguir evolucionando.</span></li>
              </ul>
            </div>


          </div>
        </section>

        <section className='mt-14 lg:mt-20 w-full text-center px-4'>
          <p className="text-[20px] sm:text-[28px] lg:text-[34px] leading-tight font-black text-[#010d3d] max-w-5xl mx-auto mb-12 mt-40">
            Hazlo con calma, compártelo con tu equipo y utilízalo como punto de partida para revisar tu sistema con otra mirada.
          </p>
          <Link href="https://api.danubio.normapro.es/apps/test-modelo-compliance-ascom/">
            <button className="bg-[#010d3d] text-white px-6 lg:px-8 py-3 rounded-xl font-bold mx-auto cursor-pointer hover:bg-[#010d3d90] transition-colors duration-300 text-[14px] lg:text-[18px]">
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
              <h1 className="text-[20px] sm:text-[28px] lg:text-[35px] font-black mb-6  text-center lg:text-left">
                "La cuestión ya no es si el sistema existe. La cuestión es si puedes demostrar que funciona."
              </h1>
              <div className="text-center lg:text-left">
                <p className="text-[16px] lg:text-[18px] font-bold text-[#000000]"><strong>Juan Manuel Galdón Requena</strong></p>
                
                
              </div>
            </div>
          </div>

        </section>


      </div>
    </div>
  );
}