import Hero from "@/components/Hero"
import Beneficios from "@/components/Beneficios"
import Credibilidad from "@/components/Credibilidad"
import FormularioRegistro from "@/components/FormularioRegistro"
import Footer from "@/components/Footer"

export default function TestMadurezCumplimientoPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero
        title="¿Sabes si tu empresa cumple... o simplemente sobrevive?"
        subtitle="Descubre en 5 minutos tu nivel de madurez en la gestión del cumplimiento y las oportunidades ocultas que podrías estar desaprovechando."
        cta="Descargar test ahora"
      />

      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">¿Qué es este test y para quién está pensado?</h2>
        <p className="mb-6">
          Este test ha sido diseñado para ayudar a empresarios, compliance officers, responsables de calidad, medio ambiente, PRL, dirección general y otros profesionales clave a identificar su punto de partida en la gestión del cumplimiento.
        </p>
        <p>
          En solo unos minutos, podrás visualizar tus puntos fuertes, detectar tus principales debilidades y empezar a definir una hoja de ruta hacia una gestión interna más eficiente, trazable y alineada con los objetivos del negocio.
        </p>
      </section>

      <Beneficios />

      <FormularioRegistro
        campaignId="madurez-cumplimiento"
        mailchimpTag="madurez-test"
      />

      <Credibilidad />

      <Footer />
    </main>
  )
}
