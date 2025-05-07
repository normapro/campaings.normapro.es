interface HeroProps {
    title: string;
    subtitle: string;
    cta: string;
  }
  
  export default function Hero({ title, subtitle, cta }: HeroProps) {
    return (
      <section className="bg-gradient-to-br from-[#00b2e3] to-[#64d8cc] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-8">{subtitle}</p>
          <a
            href="#registro"
            className="inline-block bg-white text-[#00b2e3] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            {cta}
          </a>
        </div>
      </section>
    );
  }
  