import React from "react";
import "./SobreNosotros.css";

export default function SobreNosotros() {
  return (
    <div className="min-h-full font-poppins sobre-nosotros-container">
      {/* 🌐 Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-[#005F6A] tracking-wide hover:scale-105 transition-transform cursor-pointer">
            RIDS
          </h1>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="/"
                className="text-gray-700 hover:text-[#005F6A] transition-colors font-medium relative group"
              >
                Inicio
                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#005F6A] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="text-gray-700 hover:text-[#206D99] transition-colors font-medium relative group"
              >
                Servicios
                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#206D99] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-gray-700 hover:text-[#005F6A] transition-colors font-medium relative group"
              >
                Contacto
                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#005F6A] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
          <button className="md:hidden text-[#005F6A] text-2xl">☰</button>
        </nav>
      </header>

      {/* 🌈 Hero Section */}
      <section id="inicio" className="hero-section text-white py-20 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl font-bold mb-3 animate-title">Sobre Nosotros</h1>
          <p className="text-lg opacity-90 fade-in" style={{ animationDelay: "0.3s" }}>
            Conoce más sobre RIDS y nuestra misión de transformar el futuro digital.
          </p>
        </div>
      </section>

      {/* 🧩 Main Content */}
      <section className="py-10 px-6 bg-gray-50 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* 🪄 Intro */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-[#206D99] hover:border-l-8 transition-all duration-300 hover:shadow-xl fade-in compact-text">
            <p className="text-lg text-gray-700 leading-relaxed">
              En <strong>RIDS</strong> desarrollamos soluciones tecnológicas inteligentes 
              y personalizadas que potencian el crecimiento, innovación y eficiencia 
              de las organizaciones. Creemos en el poder de la tecnología 
              para transformar ideas en impacto real.
            </p>
          </div>

          {/* 🎯 Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <AnimatedCard
              icon="🎯"
              title="Nuestra Misión"
              color="#005F6A"
              delay="0s"
            >
              Brindar soluciones tecnológicas de vanguardia que impulsen 
              el crecimiento sostenible y digital de nuestros clientes, 
              optimizando procesos y elevando su potencial.
            </AnimatedCard>

            <AnimatedCard
              icon="🚀"
              title="Nuestra Visión"
              color="#206D99"
              delay="0.2s"
            >
              Ser reconocidos como el aliado tecnológico líder en innovación, 
              calidad y compromiso, contribuyendo al desarrollo de un futuro digital.
            </AnimatedCard>
          </div>

          {/* 🌟 Valores */}
          <div
            className="bg-white rounded-lg shadow-md p-8 fade-in hover:shadow-lg transition-all duration-500"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Nuestros Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard icon="💡" title="Innovación">
                Buscamos nuevas formas de resolver desafíos tecnológicos con creatividad y propósito.
              </ValueCard>
              <ValueCard icon="🤝" title="Compromiso">
                Nos dedicamos al éxito de cada cliente, con transparencia y pasión en cada proyecto.
              </ValueCard>
              <ValueCard icon="⭐" title="Excelencia">
                Ofrecemos soluciones de la más alta calidad, cuidando cada detalle del proceso.
              </ValueCard>
            </div>
          </div>

          {/* 📞 CTA */}
          <div
            id="contacto"
            className="text-center mt-10 fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <button className="bg-[#206D99] hover:bg-[#005F6A] text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 floating-animation">
              Contáctanos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* 🔹 Componente Card Animada */
function AnimatedCard({ icon, title, children, color, delay }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-8 card-hover fade-in animated-card"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center mb-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
          style={{ backgroundColor: `${color}1A` }}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}

/* 🔹 Tarjeta de Valor */
function ValueCard({ icon, title, children }) {
  return (
    <div className="text-center value-card p-6 rounded-xl border-2 border-transparent hover:border-[#206D99]/30 hover:bg-[#206D99]/5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="value-icon w-20 h-20 bg-[#206D99]/10 rounded-full flex items-center justify-center mx-auto mb-4 floating-animation">
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="value-title font-bold text-xl text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}
