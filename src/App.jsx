import Hero from "./componentes/Hero.jsx";
import Countdown from "./componentes/Countdown.jsx";
import Details from "./componentes/Details.jsx";
import Respuesta from "./componentes/Respuesta.jsx";
import Footer from "./componentes/Footer.jsx";
import NuestraHistoria from "./componentes/NuestraHistoria.jsx";



export default function App() {
  return (
    <div>
      <Hero/>
      <NuestraHistoria/>
      <Countdown />
      <Details />
      <Respuesta />
      <Footer />
    </div>
  );
}
