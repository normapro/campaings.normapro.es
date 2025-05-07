"use client"

import { useState } from "react"

interface FormularioRegistroProps {
  campaignId: string
  mailchimpTag: string
}

export default function FormularioRegistro({
  campaignId,
  mailchimpTag,
}: FormularioRegistroProps) {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const res = await fetch("https://api-campaigns.normapro.es/api/leads/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email, campaignId, mailchimpTag }),
    })

    if (res.ok) {
      setEnviado(true)
    } else {
      const err = await res.json()
      setError(err?.message || "Hubo un error al enviar el formulario.")
    }
  }

  if (enviado) {
    return (
      <section className="py-16 px-6 text-center bg-white" id="registro">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">¡Gracias por registrarte!</h2>
          <p>En breve recibirás el test en tu correo electrónico.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-6 bg-white" id="registro">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Formulario de descarga</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#00b2e3] hover:bg-[#009fc8] text-white font-semibold py-3 rounded transition"
          >
            Quiero mi test ahora
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </section>
  )
}
