'use client';

const Localizador = () => {
    return (
        <div className="absolute top-[415px] left-1/2 transform -translate-x-1/2 z-10">
            <div className="p-[50px] text-left rounded-2xl bg-[#F2F2F5] w-[600px] h-[487px]">
                <h2 className="mb-[17px] text-[#010D3D] text-[30px] font-black">Localizador</h2>
                <form>
                    <label className="text-[#010D3D] text-[17px]">Provincia</label>
                    <select className="mb-[15px] mt-[7px] bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full">
                        <option value="agua">Toledo</option>
                    </select>

                    <label className="text-[#010D3D] text-[17px]">Localidad</label>
                    <select className="mt-[7px] mb-6 bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full">
                        <option value="agua">Caleruela</option>
                    </select>

                    <label className="text-[#010D3D] text-[17px]">Tu email donde enviaremos tu resultado</label>
                    <input type="text" className="mt-[7px] mb-8 bg-[white] p-[8px] rounded-[8px] border-[#ccced7] border-[1px] w-full" placeholder="Escribe tu email" />

                    <button className="hover:bg-[#2c365e] text-[16px] font-bold text-white bg-[#010D3D] rounded-[10px] p-[13px] w-[250px]">
                        Recibir resultado en tu email
                    </button>
                </form>
            </div>
        </div>
    ); 
};

export default Localizador;
