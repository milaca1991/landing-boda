/*

const DetallesBoda = () => {
  return (
    <div className="detalles-container">
      <h2 className="detalles-title">Detalles</h2>

      <div className="detalles-card">
        <div className="detalle-item">
          <span className="icon">🗓️​​</span>
          <p>08 de Noviembre de 2025</p>
        </div>
         <div className="detalle-item">
          <span className="icon">🕥​</span>
          <p>Hora ceremonia 10: 30 am</p>
        </div>

        <div className="detalle-item">
          <span className="icon">🏛️​</span>
          <p>Notaría 37, Bogotá</p>
        </div>

        <div className="detalle-item">
          <span className="icon">👌​</span>
          <p>Dress code: Semi-formal</p>
        </div>

        <div className="detalle-item">
          <span className="icon">💌​</span>
          <p>Lluvia de sobres</p>
        </div>

        <a
          href="https://maps.google.com/?q=Notaria+37+Bogota"
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          Ver en Google Maps
        </a>
      </div>
    </div>
  );
};

export default DetallesBoda;


*/


const EventDetails = () => {
  return (
    <section className="event-details">
      <h2 className="event-title">✨ Detalles del evento ✨</h2>

      <div className="event-item">
        <Separator />
        <div className="event-icon">
          <CalendarIcon />
        </div>
        <h3>Fecha y hora</h3>
        <p>Sábado, 08 de Nov 2025 · 10:30 A.M.</p>
      </div>

      <div className="event-item">
        <Separator />
        <div className="event-icon">
          <LocationIcon />
        </div>
        <h3>Lugar</h3>
        <p>Notaría 37 – Bogotá</p>
      </div>

      <div className="event-item">
        <Separator />
        <div className="event-icon">
          <DressCodeIcon />
        </div>
        <h3>Dress Code</h3>
        <p>Elegante casual</p>
          <p>
         
          Por favor evita el <strong>blanco</strong> y el <strong>azul</strong>, ya que son los colores de los novios.
        </p>
      </div>
    </section>
  );
};

/* Separador */
const Separator = () => {
  return (
    <svg
      className="separator"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
    >
      <path
        d="M0,10 C50,0 150,20 200,10"
        fill="transparent"
        stroke="#c4a484"
        strokeWidth="2"
      />
      <circle className="dot" cx="100" cy="10" r="3" fill="#c4a484" />
    </svg>
  );
};

/* Iconos SVG */
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#c4a484" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#c4a484" strokeWidth="2">
    <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
    <circle cx="12" cy="11" r="2.5" />
  </svg>
);

const DressCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#c4a484" strokeWidth="2">
    <path d="M9 3l1 3-2 2 2 13h4l2-13-2-2 1-3h-6z" />
  </svg>
);

export default EventDetails;
