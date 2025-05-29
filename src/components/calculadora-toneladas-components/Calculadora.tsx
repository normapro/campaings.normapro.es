'use client';

import React, { useState } from 'react';

const Calculadora = () => {

    const [formData, setFormData] = useState({
        tipoRefrigerante: '',
        kgRefrigerante: '',
        deteccionFuga: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/calculadora-toneladas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...formData,
                campaignId: 'XYZ123',
                mailchimpTag: 'Calculadora',
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
                    <label className="text-[#010D3D] text-[17px]">Tipo de refrigerante</label>
                    <select className="mb-[15px] mt-[7px] bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full" name="tipoRefrigerante" onChange={handleChange}>
                        <option value="agua">Agua</option>
                        <option value="refrigerante">Refrigerante</option>
                    </select>

                    <label className="text-[#010D3D] text-[17px]">Kg de refrigerante</label>
                    <select className="mt-[7px] mb-6 bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full" name="kgRefrigerante" onChange={handleChange}>
                        <option value="1">1 Kg</option>
                        <option value="2">2 Kg</option>
                    </select>

                    <label className="text-[#010D3D] text-[17px]">El equipo o instalación dispone de sistema de detección de fugas?</label>
                    <select className="mt-[7px] mb-4 bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full" name="deteccionFuga" onChange={handleChange}>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </select>

                    <label className="text-[#010D3D] text-[17px]">Tu email donde enviaremos tu resultado</label>
                    <input type="text" className="mt-[7px] mb-6 bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full" placeholder="Escribe tu email" name="email" onChange={handleChange} />

                    <button className="hover:bg-[#2c365e] text-[16px] font-bold text-white bg-[#010D3D] rounded-[10px] p-[13px] w-[250px]" type="submit">
                        Recibir resultado en tu email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Calculadora;
