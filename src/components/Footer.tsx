export default function Footer() {
    return (
      <footer className="bg-[#f8f8fa] text-center text-sm text-gray-500 py-6 px-4">
        <p>
          © {new Date().getFullYear()} Instituto de Innovación, Ciencia y Empresa. Todos los derechos reservados.
        </p>
        <div className="mt-2">
          <a href="https://normapro.es/aviso-legal" className="underline mr-4">
            Aviso legal
          </a>
          <a href="https://normapro.es/politica-privacidad" className="underline">
            Política de privacidad
          </a>
        </div>
      </footer>
    );
  }
  