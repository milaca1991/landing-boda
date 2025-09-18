/*
export default function respuesta() {
  return (
    <section className="respuesta">
      <h2>Confirma tu asistencia</h2>
      <a
        href="https://wa.me/573118548628?text=Hola! Confirmo mi asistencia a la boda 💒"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Confirmar por WhatsApp
      </a>
    </section>
  );
}
*/


const ConfirmAttendance = () => {
  const whatsappNumber = "573118548628";
  const message = "Hola, confirmo mi asistencia. Iremos ___ personas.";

  return (
    <section className="confirm-section">
      <h2 className="section-title">✨Confirma tu asistencia</h2>
      <p className="section-text">
        Ayúdanos confirmando tu asistencia para organizar mejor nuestro día 
      </p>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="confirm-button"
      >
        Confirmar por WhatsApp
      </a>
    </section>
  );
};

export default ConfirmAttendance;
