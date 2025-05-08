'use client';

import React from 'react';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function ModalFormulario({ visible, onClose }: Props) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white max-w-3xl w-full rounded-lg p-6 relative fade-in shadow-lg">
        {/* Botón cerrar */}
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black">
          ×
        </button>

        {/* Título y subtítulo */}
        <h2 className="text-2xl font-bold mb-2">Descarga tu test ahora</h2>
        <p className="mb-6 text-gray-600">
          Rellena este formulario y te enviaremos tu test de madurez de cumpliento gratuito y sin compromiso.
        </p>

        {/* Formulario */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Introduce tu nombre" name="nombre" className="border p-2 rounded" />
          <input placeholder="Introduce tus apellidos" name="apellidos" className="border p-2 rounded" />
          <input placeholder="Nombre de tu empresa" name="empresa" className="border p-2 rounded" />
          <input placeholder="Introduce tu cargo" name="cargo" className="border p-2 rounded" />
          <input placeholder="Introduce tu país" name="pais" className="border p-2 rounded" />
          <select name="n_empleados" className="border p-2 rounded">
            <option value="">Selecciona un rango</option>
            <option value="1-49">1-49 Empleados</option>
            <option value="50-499">50-499 Empleados</option>
            <option value="500-999">500-999 Empleados</option>
            <option value="100-1499">100-1499 Empleados</option>
            <option value="1500+">Más de 1500 Empleados</option>
          </select>
          <input placeholder="Introduce tu teléfono" name="telefono" className="border p-2 rounded" />
          <input placeholder="Introduce tu email" name="email" className="border p-2 rounded" />

          {/* Checkboxes */}
          <div className="col-span-2 space-y-2 text-sm text-gray-700 mt-4">
            <label className="flex items-start gap-2">
              <input type="checkbox" name="acepta_marketing" />
              <span>
                Acepta recibir mensajes promocionales de NormaPro sobre sus productos y servicios. Puedes darte de baja en cualquier momento...
              </span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" name="acepta_contacto" />
              <span>
                Acepta que algún miembro del equipo de NormaPro se ponga en contacto contigo para acordar una reunión demostrativa.
              </span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" name="acepta_politica" required />
              <span>
                Acepto la <a href="https://normapro.es/politica-de-privacidad/" className="text-blue-700 underline">política de privacidad</a> de NormaPro.
              </span>
            </label>
          </div>

          {/* Botón enviar */}
          <div className="col-span-2 flex justify-center mt-6">
            <button type="submit" className="bg-[#010d3d] text-white px-6 py-2 rounded">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
