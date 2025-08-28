const DetallesBoda = () => {
  return (
    <div className="detalles-container">
      <h2 className="detalles-title">Detalles</h2>

      <div className="detalles-card">
        <div className="detalle-item">
          <span className="icon">📅</span>
          <p>08 de Noviembre de 2025 - 10:30 am</p>
        </div>

        <div className="detalle-item">
          <span className="icon">📍</span>
          <p>Notaría 37, Bogotá</p>
        </div>

        <div className="detalle-item">
          <span className="icon">👔</span>
          <p>Dress code: Semi-formal</p>
        </div>

        <div className="detalle-item">
          <span className="icon">💌</span>
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