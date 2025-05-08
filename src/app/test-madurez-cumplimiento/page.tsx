'use client';

import React, { useState } from 'react';
import ModalFormulario from '@/components/ModalFormulario';

export default function PageTestMadurezCumplimiento() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="">
      <ModalFormulario visible={isModalOpen} onClose={handleCloseModal} />

      {/* Hero */}
      <section className="text-center space-y-4 mt-10 mb-12 max-w-4xl mx-auto px-4 py-12 space-y-12">
        <h1 className="text-3xl font-bold">
          ¿Sabes si tu empresa cumple... o simplemente sobrevive?
        </h1>
        <p className="text-lg">
          Descubre en 5 minutos tu nivel de madurez en la gestión del cumplimiento y las oportunidades ocultas que podrías estar desaprovechando.
        </p>
        <button onClick={handleOpenModal} className="bg-[#010d3d] text-white px-6 py-3 rounded font-semibold">
          Descargar test ahora
        </button>
      </section>

      {/* ¿Qué es este test y para quién está pensado? */}
      <div className="bg-[#f9f9f9]">
      <section className="space-y-4 mt-10 mb-12 max-w-4xl mx-auto px-4 py-12 space-y-8">
        <h2 className="text-2xl font-semibold">¿Qué es este test y para quién está pensado?</h2>
        <p>
          Este test ha sido diseñado para ayudar a empresarios, compliance officers, responsables de calidad, medio ambiente, PRL, dirección general y otros profesionales clave a identificar su punto de partida en la gestión del cumplimiento.
        </p>
        <p>
          En solo unos minutos, podrás visualizar tus puntos fuertes, detectar tus principales debilidades y empezar a definir una hoja de ruta hacia una gestión interna más eficiente, trazable y alineada con los objetivos del negocio.
        </p>
      </section>
      </div>

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
  );
}