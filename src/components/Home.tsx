'use client';

const Home = () => {
  return (
    <div>
      <div className="mb-[230px]">
        <div className="text-center text-[#010D3D] font-black text-[44px] leading-tight mt-[100px] mb-[17px]">
          <h1>¿Sabes si tu empresa cumple...</h1>
          <h1>o simplemente sobrevive?</h1>
        </div>
        <div className="text-[14px] text-center font-extrabold text-[#80869e]">
          <p>Descubre en 5 minutos tu nivel de madurez en la gestión del cumplimiento</p>
          <p>y las oportunidades ocultas que podrías estar desaprovechando.</p>
        </div>
        <div className="flex justify-center">
          <button className="mt-[25px] text-white font-bold bg-[#010D3D] py-[14px] px-[22px] rounded-xl hover:bg-[#2c365e]">Descarga el test ahora</button>
        </div>
      </div>

      <div className="ml-[35px]">
        <div className="text-[#010D3D] font-black text-[30px] leading-tight mt-[100px] mb-[17px]">
          <h2>¿Qué es este test y para </h2>
          <h2>quién está pensado?</h2>
        </div>
        <div className="mb-[15px]">
          <p className="text-[#010D3D] mb-[-1px]">Este test ha sido diseñado para ayudar a empresarios, compliance officers,</p>
          <p className="text-[#010D3D] mb-[-1px]">responsables de calidad, medio ambiente, PRL, dirección general y otros</p>
          <p className="text-[#010D3D] mb-[-1px]">profesionales clave a identificar su punto de partida en la gestión del</p>
          <p className="text-[#010D3D]">cumplimiento.</p>
        </div>
        <div>
          <p className="text-[#010D3D] mb-[-1px]">En solo unos minutos, podrás visualizar tus puntos fuertes, detectar tus</p>
          <p className="text-[#010D3D] mb-[-1px]">principales debilidades y empezar a definir una hoja de ruta hacia una</p>
          <p className="text-[#010D3D] mb-[-1px]">gestión interna más eficiente, trazable y alineada con los objetivos del</p>
          <p className="text-[#010D3D] mb-[-1px]">negocio.</p>
        </div>

      </div>
    </div>
  );
};

export default Home;