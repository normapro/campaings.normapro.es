'use client';

const Home = () => {
    return (
        <div>
            <div>
                <div className="mb-[230px]">
                    <div className="text-center text-[#010D3D] font-black text-[44px] leading-tight mt-[100px] mb-[17px]">
                        <h1>Zonas de emisiones</h1>
                        <h1>de Radón</h1>
                    </div>
                    <div className="text-[14px] text-center font-extrabold text-[#80869e]">
                        <p>Descubre la zona de emisiones de Radón en la que se encuentra su</p>
                        <p>municipio y qué supone</p>
                    </div>
                </div>

                <img
                    src="/Grupo 3539.png"
                    alt="Decoración"
                    className="absolute top-[20px] left-[-160px] w-[474px] h-[413px] pointer-events-none select-none"
                />

                <img
                    src="/Grupo 3520.png"
                    alt="Decoración secundaria"
                    className="absolute top-[-60px] left-[1614px] w-[442px] h-[387px] pointer-events-none select-none"
                />

            </div>
            <div className="bg-gradient-to-br from-[#84DBF4] to-[#B8F2EA] h-[611px]"></div>
        </div>
    );
};

export default Home;
