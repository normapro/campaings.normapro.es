// components/FormularioLead.tsx
import { useForm } from 'react-hook-form';

export default function FormularioLead() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch('https://api-campaigns.normapro.es/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    // mostrar feedback al usuario...
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
      <input {...register('nombre', { required: true })} placeholder="Introduce tu nombre" />
      <input {...register('apellidos', { required: true })} placeholder="Introduce tus apellidos" />
      <input {...register('empresa')} placeholder="Nombre de tu empresa" />
      <input {...register('cargo')} placeholder="Introduce tu cargo" />
      <input {...register('pais')} placeholder="Introduce tu país" />
      <select {...register('n_empleados')}>
        <option value="">Número de empleados</option>
        <option value="1-10">1-10</option>
        <option value="11-50">11-50</option>
        <option value="51-200">51-200</option>
        <option value="200+">Más de 200</option>
      </select>
      <input {...register('telefono')} placeholder="Introduce tu teléfono" />
      <input {...register('email', { required: true })} placeholder="Introduce tu email" />

      <label className="col-span-2">
        <input type="checkbox" {...register('acepta_marketing')} />
        Acepta recibir mensajes promocionales de NormaPro...
      </label>

      <label className="col-span-2">
        <input type="checkbox" {...register('acepta_contacto')} />
        Acepta que algún miembro del equipo de NormaPro se ponga en contacto...
      </label>

      <label className="col-span-2">
        <input type="checkbox" {...register('acepta_politica', { required: true })} />
        Acepto la <a href="/politica-privacidad" target="_blank">política de privacidad</a>.
        {errors.acepta_politica && <span className="text-red-500">Obligatorio</span>}
      </label>

      <button type="submit" className="col-span-2 bg-blue-900 text-white p-2 rounded">Enviar</button>
    </form>
  );
}
