'use client';

const ReunionPersonalizada = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 mt-10 mb-[-60px]">
            <div className="flex justify-center gap-x-12 text-center max-w-7xl w-full">

                {/* Columna 1 */}
                <div
                    className="relative max-w-sm border-r border-[#cccfd8] pr-10 flex flex-col items-center bg-no-repeat bg-top bg-contain"
                    style={{ backgroundImage: "url('/Grupo 4580.png')" }}
                >
                    <div className="absolute top-16">
                        <img
                            src="/IICE_LandingCompliancePenal_Nivel2_1.svg"
                            alt="Decoración superpuesta"
                            className="w-[264px] h-[253px]"
                        />
                    </div>
                    <div className="mt-[330px] flex flex-col items-center">
                        <h2 className="text-[#010D3D] font-extrabold text-[28px] leading-tight">Confianza y</h2>
                        <h2 className="text-[#010D3D] font-extrabold text-[28px] leading-tight">credibilidad</h2>
                        <div className="mt-6 text-[#010D3D] space-y-2">
                            <p>Este test ha sido elaborado por expertos</p>
                            <p>consultores del Instituto de Innovación, Ciencia</p>
                            <p>y Empresa, que llevan más de veinte años</p>
                            <p>dedicados a la implantación de sistemas de</p>
                            <p>gestión y cumplimiento normativo en</p>
                            <p>organizaciones de todos los tamaños y</p>
                            <p>sectores.</p>
                        </div>
                        <div className="text-[#010D3D] mt-4 space-y-2">
                            <p>Más que una herramienta, es el punto de</p>
                            <p>partida para visualizar con claridad dónde</p>
                            <p>estás y hacia dónde puedes avanzar.</p>
                        </div>
                    </div>
                </div>

                {/* Columna 2 */}
                <div
                    className="relative max-w-sm flex flex-col items-center bg-no-repeat bg-top bg-contain"
                    style={{ backgroundImage: "url('/Grupo 5276.png')" }}
                >
                    <div className="absolute top-16">
                        <img
                            src="/IICE_LandingCompliancePenal_Nivel1_6.svg"
                            alt="Decoración superpuesta"
                            className="w-[218px] h-[191px]"
                        />
                    </div>
                    <div className="mt-[310px] flex flex-col items-center">
                        <h2 className="text-[#010D3D] font-extrabold text-[28px] leading-tight">Un test.</h2>
                        <h2 className="text-[#010D3D] font-extrabold text-[28px] leading-tight">Un diagnóstico</h2>
                        <h2 className="text-[#010D3D] font-extrabold text-[28px] leading-tight">Un nuevo enfoque.</h2>
                        <div className="mt-6 text-[#010D3D] space-y-2">
                            <p>Empieza por medir. Después, podrás decidir</p>
                            <p>cómo avanzar.</p>
                        </div>
                        <div className="text-[#010D3D] mt-4 space-y-2">
                            <p>Este test te ofrece claridad, dirección y</p>
                            <p>enfoque. Y si descubres que hay margen de</p>
                            <p>mejora, en Norma Pro estamos listos para</p>
                            <p>acompañarte con soluciones digitales que</p>
                            <p>convierten el cumplimiento en una palanca</p>
                            <p>real de eficiencia y crecimiento.</p>
                        </div>
                    </div>
                </div>

                {/* Columna 3 */}
                <div
                    className="relative max-w-sm border-l border-[#cccfd8] pl-10 flex flex-col items-center bg-no-repeat bg-top bg-contain"
                    style={{ backgroundImage: "url('/Grupo 5265.png')" }}
                >
                    <div className="absolute top-16">
                        <img
                            src="/IICE_LandingCompliancePenal_Nivel2_3.svg"
                            alt="Decoración superpuesta"
                            className="w-[285px] h-[249px]"
                        />
                    </div>
                    <div className="mt-[330px] flex flex-col items-center">
                        <h2 className="text-[#010D3D] font-extrabold text-[28px] leading-tight">¿Quieres avanzar con</h2>
                        <h2 className="text-[#010D3D] font-extrabold text-[28px] leading-tight">acompañamiento</h2>
                        <h2 className="text-[#010D3D] font-extrabold text-[28px] leading-tight">experto?</h2>
                        <div className="mt-6 text-[#010D3D] space-y-2">
                            <p>Agenda una reunión con nuestro equipo y te</p>
                            <p>contaremos cómo ayudarte a interpretar tus</p>
                            <p>resultados, priorizar acciones y avanzar hacia</p>
                            <p>un modelo de cumplimiento más eficiente,</p>
                            <p>trazable y alineado con tu realidad empresarial.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón */}
            <div className="mt-12">
                <button className="hover:bg-[#2c365e] bg-gradient-to-r from-[#00B8EC] to-[#D6A4F1] text-white px-6 py-3 rounded-lg font-semibold border-none focus:outline-none">
                    Solicita una reunión personalizada
                </button>
            </div>
        </div>
    );
};

export default ReunionPersonalizada;
