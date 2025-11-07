import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    categoria: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Mensaje enviado exitosamente (simulado)");
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">
        {/* 🧾 Formulario */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1 className="contact-title">Contáctanos</h1>
          <div className="mb-5">{/* margin-bottom: 20px */}</div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Tu nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="tuemail@ejemplo.com"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          {/* 🧩 Nueva categoría de consulta */}
          <div className="form-group">
            <label htmlFor="categoria">Categoría de consulta</label>
            <select
              name="categoria"
              id="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una categoría...</option>
              <option>Atención de Emergencias. SOS Soporte.cl</option>
              <option>Instalación, Revisión de equipos nuevos y antiguos.</option>
              <option>Mantención de red y equipos computacionales</option>
              <option>Revisión de respaldos y asesoría TI Storage</option>
              <option>Manutenciones Lógicas y Físicas.</option>
              <option>Cableado estructurado bajo estrictas normas de calidad.</option>
              <option>Asesoría TI Servidores Web.</option>
              <option>Configuraciones de Servidores de correo y usuarios clientes de correo.</option>
              <option>Configuraciones de Impresoras de red.</option>
              <option>Diseño Web a la medida</option>
              <option>Plataforma de sistemas a través de la web</option>
              <option>Migración de correos</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>

        {/* ℹ️ Información adicional */}
        <div className="contact-info">
          <div className="info-item">
  <strong>📍 Dirección:</strong> Santiago, Chile
</div>

<div className="map-container">
  <iframe
    title="Ubicación RIDS"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9325850449927!2d-70.6150744!3d-33.4250019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf640dc37b43%3A0xf7b5d4def64fe908!2sLa%20Concepci%C3%B3n%2065%2C%20oficina%201003%2C%20Providencia%2C%20Santiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1762364010014!5m2!1ses!2scl"
    width="100%"
    height="220"
    style={{ border: 0, borderRadius: "12px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
<div className="info-item">
  <strong>📞 Teléfonos:</strong>
  <div className="info-sub">
    <p>+56 9 7371 3869</p>
    <p>+56 9 8807 6593</p>
  </div>
</div>

<div className="info-item">
  <strong>✉️ Correos:</strong>
  <div className="info-sub">
    <a href="mailto:soporte@rids.cl">soporte@rids.cl</a>
    <a href="mailto:carenas@rids.cl">carenas@rids.cl</a>
    <a href="mailto:informaciones@rids.cl">informaciones@rids.cl</a>
  </div>
</div>
        </div>
      </div>
    </section>
  );
} 
