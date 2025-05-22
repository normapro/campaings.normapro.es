'use client';

const Home = () => {
    return (
        <div>
            <div className="text-center text-[#010D3D] font-black text-[36px] leading-tight mt-[100px] mb-[17px]">
                <h1>¿Sabes si tu empresa cumple...</h1>
                <h1>o simplemente sobrevive?</h1>
            </div>
            <div className="text-center font-extrabold text-[#80869e]">
                <p>Descubre en 5 minutos tu nivel de madurez en la gestión del cumplimiento</p>
                <p>y las oportunidades ocultas que podrías estar desaprovechando.</p>
            </div>
            <div className="flex justify-center">
                <button className="mt-[25px] text-white  bg-[#010D3D] p-[15px] rounded-xl">Descarga el test ahora</button>
            </div>
        </div>
    );
};

export default Home;