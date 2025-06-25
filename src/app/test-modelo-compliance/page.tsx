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
      
      {/* Hero */}
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
      </div>      
    </header>
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
            className="w-[500px] relative float-right mr-[-150px] mt-[150px] h-auto z-0"
          />
      </div>
      <div className="max-w-7xl mx-auto overflow-x-hidden">
      <section >
        <div className="z-1 relative text-center space-y-4 mt-10 mb-12 max-w-3xl mx-auto px-4 py-12 space-y-12 ">
          <h1 className="text-[45px] font-black">
            ¿Está tu modelo de Compliance preparado para afrontar los retos tecnológicos?
          </h1>
          <p className="text-[15px] font-bold text-[#010d3d50] px-18">
            Un test–assessment para organizaciones que quieren conocer el nivel de preparación de su sistema de cumplimiento frente a los nuevos desafíos digitales.
          </p>
          <button onClick={handleOpenModal} className="bg-[#010d3d] text-white px-6 py-6 rounded-xl font-bold ">
            Haz el test ahora
          </button>
        </div>
        
      </section>

      {/* ¿Qué es este test y para quién está pensado? */}
    
      <section className="flex w-full py-20">
        <div className="col text-left pl-[5%] pr-[10%]">
          <h2 className="text-[30px] font-black pr-[50%]">¿Qué es este test y para quién está pensado?</h2>
          <p className="text-[17px] py-6 font-regular">
            Este test ha sido diseñado para ayudar a empresarios, compliance officers, responsables de calidad, medio ambiente, PRL, dirección general y otros profesionales clave a identificar su punto de partida en la gestión del cumplimiento. 
          </p>
          <p className="text-[17px] py-2 font-regular">
            En solo unos minutos, podrás visualizar tus puntos fuertes, detectar tus principales debilidades y empezar a definir una hoja de ruta hacia una gestión interna más eficiente, trazable y alineada con los objetivos del negocio.
          </p>
        </div>
        <div className="col w-full">
          <div className="w-full bg-contain bg-no-repeat bg-center rounded-lg overflow-hidden bg-[url('/hielo2.png')]">
          <Image
            src="/IICE_LandingCompliancePenal_Nivel2_4.svg"
            alt="Test de madurez de cumplimiento"
            width={600}
            height={400}
            className="w-full h-auto px-[30%]"

          />
          </div>
        </div>
      </section>
    
    
      <section className="flex py-20 w-full">
        <div className="col">
          <div className="w-full bg-contain bg-no-repeat bg-center rounded-lg overflow-hidden bg-[url('/hielo2.png')]">
          <Image
            src="/IICE_LandingCompliancePenal_Nivel2_4.svg"
            alt="Test de madurez de cumplimiento"
            width={600}
            height={400}
            className="w-full h-auto px-[30%]"

          />
          </div>
        </div>
        <div className="col text-left">
          <h2 className="text-[30px] font-black pr-[50%]">¿Qué vas a obtener con este test gratuito?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Evaluación inmediata en 6 bloques clave</li>
            <li>Tabla de resultados y niveles de madurez</li>
            <li>Los riesgos que probablemente estás asumiendo</li>
            <li>Las oportunidades de mejora que podrías activar</li>
            <li>Y una orientación práctica para avanzar con enfoque y eficiencia</li>
          </ul>
        </div>      

        
      </section>
    

      {/* ¿Por qué es importante medir? */}
      {/* ¿Qué vas a obtener con este test gratuito? */}
      <section className="space-y-4 max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h2 className="text-2xl font-semibold">¿Qué vas a obtener con este test gratuito?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Evaluación inmediata en 10 bloques clave</li>
          <li>Tabla de resultados y niveles de madurez</li>
          <li>Recomendaciones personalizadas para cada nivel</li>
          <li>Ideas para mejorar procesos y digitalizar con sentido</li>
          <li>Documento descargable y compartible con tu equipo o dirección</li>
        </ul>
      </section>

      {/* Formulario de descarga */}
      <section className="space-y-4 text-center max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h2 className="text-2xl font-semibold">Formulario de descarga</h2>
        <p>
          Haz clic en el botón y accede a un breve formulario donde podrás completar tus datos. En menos de un minuto recibirás el test completo en tu correo.
        </p>
        <button onClick={handleOpenModal} className="bg-[#010d3d] text-white px-6 py-3 rounded font-semibold">
          Quiero mi test ahora
        </button>
      </section>

      {/* Confianza y credibilidad */}
      <div className="bg-[#f9f9f9]">
      <section className="space-y-4 max-w-4xl mx-auto px-4 py-12 space-y-8 text-center ">
        <h2 className="text-2xl font-semibold">Confianza y credibilidad</h2>
        <p>
          Este test ha sido elaborado por expertos consultores del Instituto de Innovación, Ciencia y Empresa, que llevan más de veinte años dedicados a la implantación de sistemas de gestión y cumplimiento normativo en organizaciones de todos los tamaños y sectores.
        </p>
        <p>
          Más que una herramienta, es el punto de partida para visualizar con claridad dónde estás y hacia dónde puedes avanzar.
        </p>
      </section>
      </div>

      {/* ¿Por qué NormaPro? */}

      {/* Diagnóstico y enfoque */}
      <section className="space-y-4 max-w-4xl mx-auto px-4 py-12 space-y-8 text-center">
        <h2 className="text-2xl font-semibold">Un test. Un diagnóstico. Un nuevo enfoque.</h2>
        <p>
          Empieza por medir. Después, podrás decidir cómo avanzar.
        </p>
        <p>
          Este test te ofrece claridad, dirección y enfoque. Y si descubres que hay margen de mejora, en NormaPro estamos listos para acompañarte con soluciones digitales que convierten el cumplimiento en una palanca real de eficiencia y crecimiento.
        </p>
      </section>

      {/* Solicitar reunión personalizada */}
      <section className="text-center space-y-4 max-w-4xl mx-auto px-4 py-12 space-y-10">
        <h2 className="text-2xl font-semibold">¿Quieres avanzar con acompañamiento experto?</h2>
        <p>
          Agenda una reunión con nuestro equipo y te contaremos cómo ayudarte a interpretar tus resultados, priorizar acciones y avanzar hacia un modelo de cumplimiento más eficiente, trazable y alineado con tu realidad empresarial.
        </p>
        <button onClick={handleOpenModal} className="bg-[#010d3d] text-white px-6 py-3 rounded font-semibold">
          Solicitar reunión personalizada
        </button>
      </section>
    </div>
    </div>
  );
}