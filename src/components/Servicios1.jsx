import React, { useEffect, useRef } from "react";
import "./Servicios1.css";
import serviciosImg from "../assets/Servicios.gif"; 

export default function Servicios1() {
  const containerRef = useRef(null);

  // 🟦 Observer para animaciones de entrada
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    el.querySelectorAll(".s1-card").forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const servicios = [
    {
      icon: "💻",
      titulo: "Desarrollo Web",
      descripcion:
        "Creamos sitios modernos, rápidos y personalizados, con las últimas tecnologías y un diseño profesional.",
    },
    {
      icon: "🛠️",
      titulo: "Soporte y Mantenimiento",
      descripcion:
        "Brindamos soporte técnico continuo, mantenimiento preventivo y correctivo 24/7 para tu empresa.",
    },
    {
      icon: "🌐",
      titulo: "Redes e Infraestructura",
      descripcion:
        "Diseñamos e implementamos redes seguras, eficientes y adaptadas a tu entorno corporativo.",
    },
    {
      icon: "🎨",
      titulo: "Diseño UX/UI",
      descripcion:
        "Diseños centrados en el usuario, combinando estética e intuitividad para maximizar resultados.",
    },
    {
      icon: "☁️",
      titulo: "Servicios en la Nube",
      descripcion:
        "Migramos tus sistemas a la nube con soluciones seguras, flexibles y escalables.",
    },
    {
      icon: "🔒",
      titulo: "Ciberseguridad",
      descripcion:
        "Protegemos tus activos digitales con auditorías, monitoreo y respuesta ante incidentes.",
    },
  ];

  return (
    <section className="s1-section" id="servicios1" ref={containerRef}>
      {/* 🖼️ Encabezado con imagen de fondo o GIF */}
      <div className="s1-banner">
        <img src={serviciosImg} alt="Banner Servicios" />
        <div className="s1-banner-overlay">
          <h1>Nuestros Servicios</h1>
          <p>Innovación, tecnología y seguridad al servicio de tu empresa</p>
        </div>
      </div>

      {/* 🟦 Contenido principal */}
      <div className="s1-inner max-w-6xl mx-auto px-6">
        <h2 className="s1-title">Soluciones Integrales en Tecnología</h2>
        <p className="s1-sub">
          Impulsamos tu negocio con herramientas digitales diseñadas para crecer contigo.
        </p>

        <div className="s1-grid">
          {servicios.map((s, i) => (
            <article
              className="s1-card"
              key={i}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="s1-icon">{s.icon}</div>
              <h3 className="s1-card-title">{s.titulo}</h3>
              <p className="s1-card-desc">{s.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
