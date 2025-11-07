import React from "react";

const plans = [
  {
    name: "Esencial",
    price: "CLP $24.995 / mes",
    discount: "50% OFF",
    description: "Tu primer paso hacia un soporte confiable.",
    features: [
      "1 usuario / 1 equipo",
      "Configuración y software esencial",
      "Preventivo mensual: antivirus y actualizaciones",
      "Respaldo local básico",
    ],
    highlight: false,
  },
  {
    name: "Avanza",
    price: "CLP $49.995 / mes",
    discount: "50% OFF",
    description: "El impulso que tu negocio necesita para crecer seguro.",
    features: [
      "Hasta 3 usuarios / equipos",
      "Soporte remoto esencial y avanzado",
      "Continuidad operativa y mantenimiento",
      "Asesoría remota en configuración",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "CLP $229.950 / mes",
    discount: "50% OFF",
    description: "Soporte integral con presencia en terreno cuando lo requieras.",
    features: [
      "Soporte remoto ilimitado",
      "Mantenimiento correctivo",
      "1 visita presencial mensual incluida",
      "Gestión de licencias corporativas",
    ],
    highlight: true,
  },
  {
    name: "Infinity",
    price: "Cotización / según alcance",
    discount: "",
    description: "Un plan sin límites, 100% a medida.",
    features: [
      "Cobertura ajustada a la empresa",
      "Soporte remoto y presencial a convenir",
      "Técnico residente opcional",
      "Servicios extra: licencias, monitoreo, web, TI",
    ],
    highlight: false,
  },
];

export default function Planes() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-700 mb-3">Nuestros Planes de Suscripción</h2>
        <p className="text-gray-600">
          Descubre el plan que mejor se adapta a tu empresa. Diseñados para ofrecer soporte TI confiable y ciberseguridad de primer nivel.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative w-full sm:w-80 bg-white border border-sky-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
              plan.highlight ? "bg-sky-50 border-sky-300 shadow-lg" : ""
            }`}
          >
            {plan.discount && (
              <div className="absolute top-4 right-4 bg-sky-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                {plan.discount}
              </div>
            )}

            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white text-xs px-4 py-1 rounded-full shadow">
                RECOMENDADO
              </div>
            )}

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-sky-700 mb-2">{plan.name}</h3>
              <p className="text-gray-500 italic mb-4">{plan.description}</p>
              <p className="text-2xl font-bold text-gray-800 mb-4">{plan.price}</p>

              <ul className="text-left text-gray-600 mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-sky-500">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded-lg font-medium transition ${
                  plan.highlight
                    ? "bg-sky-600 text-white hover:bg-sky-700"
                    : "bg-sky-100 text-sky-700 hover:bg-sky-200"
                }`}
              >
                {plan.name === "Infinity" ? "Contactar" : "Contratar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
