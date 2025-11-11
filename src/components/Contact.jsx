import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    categoria: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ nombre: "", correo: "", categoria: "", mensaje: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setSuccess(false);
    }

    setLoading(false);
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">
        {/* 🧾 FORMULARIO PRINCIPAL */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="contact-title">Contáctanos</h2>

          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Tu nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              type="email"
              name="correo"
              placeholder="tuemail@ejemplo.com"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="categoria">Categoría de consulta</label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una categoría...</option>
              <option>Atención de Emergencias. SOS Soporte.cl</option>
              <option>Instalación y revisión de equipos</option>
              <option>Mantención de red y equipos computacionales</option>
              <option>Asesoría TI Storage y respaldos</option>
              <option>Manutenciones Lógicas y Físicas</option>
              <option>Cableado estructurado</option>
              <option>Asesoría TI Servidores Web</option>
              <option>Configuración de Servidores y correos</option>
              <option>Configuración de Impresoras de red</option>
              <option>Diseño Web a medida</option>
              <option>Plataformas de sistemas web</option>
              <option>Migración de correos</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {success === true && (
            <p className="success-msg">✅ ¡Mensaje enviado con éxito!</p>
          )}
          {success === false && (
            <p className="error-msg">❌ Error al enviar el mensaje. Intenta nuevamente.</p>
          )}
        </form>

        {/* 📍 PANEL DE INFORMACIÓN */}
        <div className="contact-info">
          <h3>Información de contacto</h3>

          <div className="info-item">
            <strong>Ubicación:</strong>
            <span>📍 Santiago, Chile</span>
          </div>

          <div className="info-item">
            <strong>Teléfonos:</strong>
            <span>
              📞 +56 9 7371 3869 <br />
              📞 +56 9 8807 6593
            </span>
          </div>

          <div className="info-item">
            <strong>Correos:</strong>
            <span>
              <a href="mailto:soporte@rids.cl">soporte@rids.cl</a> <br />
              <a href="mailto:carenas@rids.cl">carenas@rids.cl</a> <br />
              <a href="mailto:informaciones@rids.cl">informaciones@rids.cl</a>
            </span>
          </div>

          {/* 🗺️ MAPA AJUSTADO */}
          <div className="info-item info-map">
            <strong>Mapa:</strong>
            <div className="map-container">
              <iframe
                title="Ubicación RIDS"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.014552870874!2d-70.61518872451903!3d-33.42280589778254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf640dc37b43%3A0xf7b5d4def64fe908!2sLa%20Concepci%C3%B3n%2065%2C%20Oficina%201003%2C%20Providencia%2C%20Santiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1730740814456!5m2!1ses!2scl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
