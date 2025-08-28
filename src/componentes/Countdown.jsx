import { useEffect, useState } from "react";

function Countdown() {
  const weddingDate = new Date("2025-11-08T10:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
   /* <section>
      <h2>Faltan...</h2>
      <p style={{ fontSize: "1.5rem" }}>
        {timeLeft.days} días {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </section>*/

    <section className="countdown">
      <h2>Faltan...</h2>
      <div className="time-boxes">
        <div><span>{timeLeft.days}</span><p>Días</p></div>
        <div><span>{timeLeft.hours}</span><p>Horas</p></div>
        <div><span>{timeLeft.minutes}</span><p>Minutos</p></div>
        <div><span>{timeLeft.seconds}</span><p>Segundos</p></div>
        <h2>para dar el sí...</h2>
      </div>
    </section>
  );
}

export default Countdown;