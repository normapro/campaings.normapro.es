export default function Beneficios() {
    const beneficios = [
      "Evaluación inmediata en 10 bloques clave",
      "Tabla de resultados y niveles de madurez",
      "Recomendaciones personalizadas para cada nivel",
      "Ideas para mejorar procesos y digitalizar con sentido",
      "Documento descargable y compartible con tu equipo o dirección",
    ];
  
    return (
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">¿Qué vas a obtener con este test gratuito?</h2>
          <ul className="space-y-4 text-lg">
            {beneficios.map((b, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  