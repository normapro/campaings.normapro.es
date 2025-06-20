'use client';

const Home2 = () => {
    return (
        <div className="mt-[100px] relative max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 items-center gap-8 h-auto">

            <div className="relative w-full max-w-[350px] h-auto mx-auto">
                <img
                    src="/imagenSeccion23.png"
                    alt="Fondo gráficas"
                    className="w-full h-auto relative z-0"
                />
                <img
                    src="/imagenSeccion21.svg"
                    alt="Gráficas"
                    className="absolute top-12 left-20 w-full h-auto max-w-[230px] z-10"
                />
            </div>

            <div className="text-[#010D3D] max-w-[550px]">
                <h2 className="text-3xl font-black">Lorem ipsum dolor</h2>
                <h2 className="text-3xl font-black mb-4">sit amet</h2>
                <p>
                    Texto en el que ofrecemos los servicios de consultoría de Instituto o productos NormaPro que puedan interesar al cliente que haya llegado a esta landing.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur, diam id auctor sagittis, lectus sapien feugiat odio, a interdum orci velit nec ipsum. Phasellus euismod libero vitae nunc commodo, ut gravida tellus sollicitudin. Nullam dignissim sagittis lobortis. Pellentesque metus nibh, lacinia a interdum at, faucibus quis libero.
                </p>

                <button className="mt-6 relative overflow-hidden text-white px-6 py-3 rounded-lg font-semibold border-none focus:outline-none transition-colors duration-500 bg-gradient-to-r from-[#00B8EC] to-[#D6A4F1] hover:bg-[#2c365e] hover:from-transparent hover:to-transparent">
                    Solicita una reunión personalizada
                </button>
            </div>

        </div>
    );
};

export default Home2;
