'use client';

const Home2 = () => {
    return (
        <div className="h-[611px]">
            <img
                src= "/imagenSeccion21.svg"
                alt="Gráficas"
                className="absolute top-[1355px] left-[550px] w-full h-auto max-w-[220px] z-10"
            />

            <img
                src= "/imagenSeccion23.png"
                alt="Fondo gráficas"
                className="absolute top-[1320px] left-[515px] w-[308px] h-[262px] z-0"
            />

            <div className="text-[#010D3D] ml-[950px] mt-[161px] max-w-[550px]">
                <h2 className="text-3xl font-black">Lorem ipsum dolor</h2>
                <h2 className="text-3xl font-black mb-4">sit amet</h2>
                <p>Texto en el que ofrecemos los servicios de consultoría de Instituto o productos NormaPro que puedan interesar al cliente que haya llegado a esta landing.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur, diam id auctor sagittis, lectus sapien feugiat odio, a interdum orci velit nec ipsum. Phasellus euismod libero vitae nunc commodo, ut gravida tellus sollicitudin. Nullam dignissim sagittis lobortis. Pellentesque metus nibh, lacinia a interdum at, faucibus quis libero.</p>
            </div>

            <button className="mt-6 ml-[949px] relative overflow-hidden text-white px-6 py-3 rounded-lg font-semibold border-none focus:outline-none transition-colors duration-500 bg-gradient-to-r from-[#00B8EC] to-[#D6A4F1] hover:bg-[#2c365e] hover:from-transparent hover:to-transparent">
                Solicita una reunión personalizada
            </button>
        </div>
    );
};

export default Home2;
