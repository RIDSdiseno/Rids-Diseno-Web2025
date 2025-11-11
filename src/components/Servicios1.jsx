import Slider from "react-slick"; // 🌀 Carrusel
import "./Servicios1.css";
import React, { useState } from "react";

import img1 from "../assets/hero1.png";
import img2 from "../assets/hero2.png";
import img3 from "../assets/hero3.png";
import img4 from "../assets/hero4.png";


export default function Servicios1() {
  const [activeCard, setActiveCard] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const servicios = [
    {
      icon: "💻",
      titulo: "Desarrollo Web",
      descripcion:
        "Creamos sitios web rápidos, modernos y escalables con las mejores tecnologías actuales.",
    },
    {
      icon: "🎨",
      titulo: "Diseño UX/UI",
      descripcion:
        "Diseñamos interfaces atractivas, intuitivas y centradas en la experiencia del usuario.",
    },
    {
      icon: "🔒",
      titulo: "Ciberseguridad",
      descripcion:
        "Protegemos tus sistemas frente a amenazas con soluciones de seguridad avanzadas.",
    },
    {
      icon: "☁️",
      titulo: "Servicios en la Nube",
      descripcion:
        "Migramos tus sistemas a la nube con alta disponibilidad y flexibilidad.",
    },
    {
      icon: "🛠️",
      titulo: "Soporte y Mantenimiento",
      descripcion:
        "Monitoreo, mantenimiento y asistencia técnica personalizada para tu empresa.",
    },
  ];

  return (
    <section className="servicios-section" id="servicios">
      {/* 🖼️ Carrusel */}
      <div className="servicios-carousel">
        <Slider {...settings}>
          {[img1, img2, img3, img4].map((img, i) => (
            <div key={i} className="servicios-slide">
              <img src={img} alt={`Slide ${i}`} className="servicios-img" />
            </div>
          ))}
        </Slider>

        {/* 🌟 Texto fijo sobre el carrusel */}
        <div className="servicios-overlay">
          <h1 className="servicios-title">Nuestros Servicios</h1>
          <p className="servicios-sub">
            Innovación, tecnología y seguridad al servicio de tu empresa
          </p>
        </div>
      </div>

      {/* 🧩 Cards */}
      <div className="servicios-container">
        <h2 className="servicios-heading">Soluciones Tecnológicas</h2>
        <p className="servicios-text">
          Adaptamos nuestras soluciones a las necesidades reales de tu negocio.
        </p>

        <div className="servicios-grid">
          {servicios.map((s, i) => (
            <div
              key={i}
              className={`servicios-card ${activeCard === i ? "active" : ""}`}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
            >
              <div className="servicios-icon">{s.icon}</div>
              <h3 className="servicios-card-title">{s.titulo}</h3>
              <p className="servicios-card-desc">{s.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}