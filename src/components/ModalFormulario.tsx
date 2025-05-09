'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormularioLeadData {
  nombre: string;
  apellidos: string;
  empresa?: string;
  cargo?: string;
  pais?: string;
  n_empleados?: string;
  telefono?: string;
  email: string;
  acepta_marketing?: boolean;
  acepta_contacto?: boolean;
  acepta_politica: boolean;
}

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function ModalFormulario({ visible, onClose }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormularioLeadData>();
  const [mensaje, setMensaje] = useState<string | null>(null);

  if (!visible) return null;

  const onSubmit = async (data: FormularioLeadData) => {
    try {
      const res = await fetch('https://api-campaigns.normapro.es/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMensaje("¡Gracias por tu interés! Te hemos enviado el test por correo electrónico. Revisa tu bandeja de entrada y también la carpeta de spam o promociones por si acaso.");
      } else {
        setMensaje("Hubo un problema al procesar tu solicitud. Intenta nuevamente más tarde.");
      }
    } catch (error) {
      setMensaje("Error de conexión. Por favor, verifica tu red e inténtalo de nuevo.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-3xl rounded-lg p-6 relative fade-in shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Botón cerrar */}
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black">
          ×
        </button>

        <h2 className="text-2xl font-bold mb-2">Test de madurez de cumplimiento</h2>
        <p className="mb-6 text-gray-600">
          Rellena este formulario y nos pondremos en contacto contigo para hacerte llegar el test de madurez de cumplimiento gratuito y sin compromiso.
        </p>

        {mensaje ? (
          <div className="text-center text-green-700 font-semibold text-lg p-4">
            {mensaje}
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
            <div className="col-span-1 space-y-2">
            <input placeholder="Introduce tu nombre" {...register('nombre', { required: true })} className="w-full block border p-2 rounded" />
            <input placeholder="Introduce tus apellidos" {...register('apellidos', { required: true })} className="w-full block border p-2 rounded" />
            <input placeholder="Nombre de tu empresa" {...register('empresa')} className="w-full block border p-2 rounded" />
            <input placeholder="Introduce tu cargo" {...register('cargo')} className="w-full block border p-2 rounded" />
            <input placeholder="Introduce tu país" {...register('pais')} className="w-full block border p-2 rounded" />
            <input placeholder="Introduce tu teléfono" {...register('telefono', {
              pattern: {
                value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/,
                message: "Introduce un teléfono válido"
              }
            })} className="w-full block border p-2 rounded" />
            <input placeholder="Introduce tu email" {...register('email', {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Introduce un correo electrónico válido"
              }
            })} className="w-full block border p-2 rounded" />
            </div>

            <select {...register('n_empleados')} className="w-full block border p-2 rounded">
              <option value="">Selecciona un rango</option>
              <option value="1-49">1-49 Empleados</option>
              <option value="50-499">50-499 Empleados</option>
              <option value="500-999">500-999 Empleados</option>
              <option value="100-1499">100-1499 Empleados</option>
              <option value="1500+">Más de 1500 Empleados</option>
            </select>
            

            <div className="col-span-1 space-y-2 text-sm text-gray-700 mt-4">
              <label className="flex items-start gap-2">
                <input type="checkbox" {...register('acepta_marketing')} />
                <span>Acepta recibir mensajes promocionales de NormaPro.</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" {...register('acepta_contacto')} />
                <span>Acepta que el equipo de NormaPro te contacte para agendar una demo.</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" {...register('acepta_politica', { required: true })} />
                <span>
                  Acepto la <a href="/politica-privacidad" className="text-blue-700 underline">política de privacidad</a> de NormaPro.
                </span>
              </label>
              {errors.acepta_politica && <p className="text-red-500 text-sm">Este campo es obligatorio.</p>}
            </div>

            {errors.telefono && <p className="text-red-500 text-sm col-span-1">{errors.telefono.message}</p>}
            {errors.email && <p className="text-red-500 text-sm col-span-1">{errors.email.message}</p>}

            <div className="col-span-1 flex justify-center mt-6">
              <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded">
                Enviar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
