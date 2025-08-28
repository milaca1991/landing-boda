

const NuestraHistoria = () => {
  const fotos = [

    { src: "src/img/asado.jpg", caption: "El amor es elegir, cada día, a la misma persona 💍" },
    { src: "src/img/viajeeje.jpg", caption: "Es aprender a esperar, incluso cuando el tiempo se alarga✨" },
    { src: "src/img/viajeeuro.jpg", caption: "y saber que la felicidad solo es real cuando es compartida 🚌 " },
  ];

  return (
    <section className="nuestra-historia">
      <h2 className="titulo">Un pedacito de nosotros</h2>
      <div className="fotos-container">
        {fotos.map((foto, index) => (
          <div key={index} className="foto-card">
            <img src={foto.src} alt={`foto-${index}`} className="foto" />
            <p className="caption">{foto.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};  

export default NuestraHistoria;
