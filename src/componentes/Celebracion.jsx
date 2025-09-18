/*
const Celebration = () => {
  return (
    <section className="celebration-section">
      <h2 className="celebration-title">✨ Celebración ✨</h2>
      <p className="celebration-text">
        Después de la ceremonia, queremos compartir un almuerzo especial en nuestro nuevo hogar🍽️.  
      </p>
      
    </section>
  );
};

export default Celebration;
 */
const Celebration = () => {
  return (
    <section className="celebration-section">
      <h2 className="celebration-title">✨ Celebración ✨</h2>
      <p className="celebration-text">
        Después de la ceremonia, queremos compartir un <strong>almuerzo </strong> con cada uno de ustedes en nuestro nuevo hogar.  
         </p>

      <div className="celebration-detail">
        <Separator />

            <br/>
        {/* Icono de casa con corazón */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#c4a484"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="celebration-icon"
        >
          <path d="M3 11L12 2l9 9" />
          <path d="M5 11v10h14V11" />
          <path d="M12 17l-2-2a2 2 0 0 1 4 0l-2 2z" />
        </svg>

        <h3 className="celebration-subtitle">Ubicación</h3>
        <p className="celebration-text">
          Conjunto <strong>Miramont Club residencial</strong>  
          <br />
          Cra. 8 #167d-62 – Bogotá
        </p>
      </div>
    </section>
  );
};

/* Reutilizamos el separador bonito */
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

export default Celebration;
