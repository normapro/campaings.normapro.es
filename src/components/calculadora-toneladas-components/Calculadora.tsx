'use client';

import React, { useState } from 'react';

const Calculadora = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        tipoRefrigerante: '',
        kgRefrigerante: '',
        deteccionFuga: '',
        email: '',
    });

    const calcularResultados = () => {
        let toneladas = '1.5';
        let oca = 'Sí';
        let revision = 'Anual';
        return { toneladas, oca, revision };
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { toneladas, oca, revision } = calcularResultados();

        const response = await fetch('http://localhost:7000/calculadoraToneladas/registerCalculadora', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre: formData.nombre,
                tiposRefrigerantes: formData.tipoRefrigerante,
                pesoRefrigerante: formData.kgRefrigerante,
                deteccionFuga: formData.deteccionFuga,
                email: formData.email,
                campaignId: 'XYZ123',
                mailchimpTag: 'Calculadora',
                resultadoToneladas: toneladas,
                frecuenciaOCA: oca,
                revisionFugas: revision,
            }),
        });

        if (response.ok) {
            alert('¡Resultado enviado a tu email!');
        } else {
            alert('Hubo un error al enviar los datos');
        }
    };

    return (
        <div className="absolute top-[530px] left-1/2 transform -translate-x-1/2 z-10">
            <div className="p-[50px] text-left rounded-2xl bg-[#F2F2F5] w-[600px] h-[566px]">
                <h2 className="mb-[17px] text-[#010D3D] text-[30px] font-black">Calculadora</h2>
                <form onSubmit={handleSubmit}>
                    <label className="text-[#010D3D] text-[17px]">Nombre</label>
                    <input type="text" className="mb-[15px] mt-[7px] bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full" placeholder="Escribe tu nombre" name="nombre" onChange={handleChange} />

                    <label className="text-[#010D3D] text-[17px]">Tipo de refrigerante</label>
                    <select className="mb-[15px] mt-[7px] bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full" name="tipoRefrigerante" onChange={handleChange}>
                        <option value="">Selecciona...</option>
                        <option value="agua">Agua</option>
                        <option value="refrigerante">Refrigerante</option>
                    </select>

                    <label className="text-[#010D3D] text-[17px]">Kg de refrigerante</label>
                    <select className="mt-[7px] mb-6 bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full" name="kgRefrigerante" onChange={handleChange}>
                        <option value="">Selecciona...</option>
                        <option value="1">1 Kg</option>
                        <option value="2">2 Kg</option>
                    </select>

                    <label className="text-[#010D3D] text-[17px]">El equipo o instalación dispone de sistema de detección de fugas?</label>
                    <select className="mt-[7px] mb-4 bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full" name="deteccionFuga" onChange={handleChange}>
                        <option value="">Selecciona...</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </select>

                    <label className="text-[#010D3D] text-[17px]">Tu email donde enviaremos tu resultado</label>
                    <input type="email" className="mt-[7px] mb-6 bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full" placeholder="Escribe tu email" name="email" onChange={handleChange} />

                    <button className="hover:bg-[#2c365e] text-[16px] font-bold text-white bg-[#010D3D] rounded-[10px] p-[13px] w-[250px]" type="submit">
                        Recibir resultado en tu email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Calculadora;