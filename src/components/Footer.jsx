import React from "react";
import { FaLinkedin, FaInstagram, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#005F6A] to-[#206d99] text-white text-center py-10 font-[Poppins] relative z-10">
      {/* Íconos */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.linkedin.com/in/asesor%C3%ADas-rids-ltda-348522107/?originalSubdomain=cl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 transition-all duration-300 text-[#d9f3ff] hover:text-white shadow-md hover:scale-110"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://www.instagram.com/rids.cl/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 transition-all duration-300 text-[#d9f3ff] hover:text-white shadow-md hover:scale-110"
        >
          <FaInstagram size={22} />
        </a>

        <a
          href="https://econnet.cl/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sitio Econnet"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 transition-all duration-300 text-[#d9f3ff] hover:text-white shadow-md hover:scale-110"
        >
          <FaGlobe size={22} />
        </a>
      </div>

      {/* Información */}
      <div className="flex flex-col items-center gap-2 text-sm opacity-90">
        <p>📧 contacto@rids.cl</p>
        <p>📞 +56 9 1234 5678</p>
      </div>

      {/* Línea divisoria */}
      <div className="w-2/3 h-[1px] bg-white/40 my-6 mx-auto"></div>

      {/* Texto final */}
      <p className="text-sm opacity-80 tracking-wide">
        © {new Date().getFullYear()} <span className="font-semibold">RIDS</span> – Soluciones Integrales de Tecnología
      </p>
    </footer>
  );
}
