'use client';

const Resultado = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                <div className="p-4 text-sm text-gray-500 border-b border-gray-200">
                    <p><strong>Enviado por</strong> &nbsp; NormaPro</p>
                    <p><strong>Asunto</strong> &nbsp; Calculadora de toneladas equivalentes NormaPro</p>
                </div>
                <div className="p-6">
                    <div className="text-center mb-6">
                        <img src="https://via.placeholder.com/100x40?text=Logo" alt="Logo NormaPro" className="mx-auto mb-4" />
                        <h1 className="text-xl font-bold text-gray-800">
                            Resultado de la calculadora <br />
                            de toneladas equivalentes
                        </h1>
                        <p className="text-gray-500 mt-2">Hola [nombre del destinatario],</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <p className="text-sm font-semibold mb-2 text-gray-700">
                            Según los datos que nos has facilitado:
                        </p>
                        <div className="text-sm text-gray-700 space-y-1">
                            <p>
                                <span className="font-medium">Tipo de refrigerante:</span> <span className="float-right font-bold">R-407H</span>
                            </p>
                            <p>
                                <span className="font-medium">Kg de refrigerante:</span> <span className="float-right font-bold">100,00</span>
                            </p>
                            <p>
                                <span className="font-medium">Sistema de detección de fugas:</span> <span className="float-right font-bold">Sí</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resultado;
