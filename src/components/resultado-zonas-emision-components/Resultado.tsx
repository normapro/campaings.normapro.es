'use client';

const Resultado = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black-100 p-4">
            <div className="h-[1183px] w-[668px] bg-[#f8f8fa] border-[2px] border-[#f1f1f1]">

                <div className="text-[#010D3D] whitespace-nowrap bg-white flex h-[110px] text-[16px] p-8">
                    <div>
                        <p>Enviado por</p>
                        <p className="ml-[33px]">Asunto</p>
                    </div>
                    <div className="ml-[40px]">
                        <p><strong>NormaPro</strong></p>
                        <p><strong>Zona de emisiones de Radón</strong></p>
                    </div>
                </div>

                <div className="text-right mt-[24px] mr-[34px]">
                    <a
                        href="https://normapro.es"
                        className="inline-block text-[#999eb1] border-b border-[#999eb1] text-[16px] leading-[18px] "
                    >
                        Versión web
                    </a>
                </div>


                <div className="flex justify-center mb-[30.04px] mt-[15px]">
                    <img
                        src="/Grupo 2996.png"
                        alt="Logo NormaPro"
                        className="w-[180px] h-[43px] pointer-events-none select-none"
                    />
                </div>

                <div className="text-[#010D3D] w-[600px] mx-auto">
                    <div className="bg-[white] h-[175px] pt-[25px]">
                        <div className="ml-[40px]">
                            <h1 className="font-extrabold text-[36px] mt-[15px]">Zona de emisiones de Radón</h1>

                            <p className="mt-[30px]">Hola [nombre del destinatario],</p>

                        </div>

                    </div>
                    <div className="bg-[#eaeaf2] h-[260px]">

                        <div className="mx-[39px] pt-[26px]">

                            <p className="mb-[15px]">El municipio <strong>Villanueva de Bogas (Toledo)</strong> se encuentra en <strong>Zona 2</strong></p>

                            <p>Según la Ley Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum diam purus, et pulvinar lorem ornare eu. Morbi luctus, quam eget ornare pulvinar, nisl risus eleifend magna, nec faucibus elit eros a mauris está obligado a <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum diam purus, et pulvinar lorem ornare eu. Morbi luctus, quam eget ornare pulvinar, nisl risus eleifend magna, nec faucibus elit eros a mauris.</strong></p>

                        </div>

                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-[#010D3D] w-[600px] h-[291px] bg-white flex">


                        <div className="ml-[56px] mt-[50px]">

                            <img
                                src="/calendar-clock.png"
                                alt="Calendario y reloj"
                                className="w-[60px] h-[53px] pointer-events-none select-none"
                            />

                        </div>

                        <div className="ml-[30px] mt-[50px] w-[400px]">

                            <h3 className="mb-[13px] text-[22px] font-bold">Lorem ipsum dolor sit amet</h3>

                            <p>Texto en el que ofrecemos los servicios de consultoría de Instituto o productos NormaPro que puedan interesar al cliente que haya llegado a esta landing.</p>

                            <button className="mt-[30px] font-bold bg-[#010D3D] text-white rounded-xl px-[30px] py-[10px]">Reservar una reunión con nosotros</button>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-[600px] h-[141px] text-[#666D8A] text-[13px] mt-[30px]">
                        <p className="leading-snug">
                            Cláusula de Confidencialidad: Este mensaje, y en su caso, cualquier fichero anexo al mismo, puede contener información CONFIDENCIAL o legalmente protegida (LOPD 15/1999 de 13 de Diciembre), siendo para uso exclusivo del destinatario. No hay renuncia a la confidencialidad o secreto profesional por cualquier transmisión defectuosa o errónea, y queda expresamente prohibida su divulgación, copia o distribución a terceros sin la autorización expresa del remitente. Si ha recibido este mensaje por error, se ruega lo notifique al remitente enviando un mensaje al correo electrónico info@normapro.es o al teléfono al 953 190 510 y proceda inmediatamente al borrado del mensaje original y de todas sus copias. Gracias por su colaboración.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resultado;
