/*
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content-box">
    <h1>Cami & Diego</h1>
    <p>¡Nos vamos a casar!
Acompáñanos a dar el "Sí, acepto"</p>
  </div>
    </section>
  );
};

export default Hero;
*/
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content-box">
     
        <h1 className="names">Cami & Diego</h1>
        <p className="subtitle">¡Nos casamos!</p>

        {/* Grid estilo invitación */}
        <div className="date-grid">
          <div className="date-item">SÁBADO</div>
          <div className="date-item">08 DE NOV 2025</div>
          <div className="date-item">10:30 A.M.</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



