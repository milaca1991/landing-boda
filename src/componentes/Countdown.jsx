/* 
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


    <section className="countdown">
      <h2>Solo faltan...</h2>
      <div className="time-boxes">
        <div><span>{timeLeft.days}</span><p>Días</p></div>
        <div><span>{timeLeft.hours}</span><p>Horas</p></div>
        <div><span>{timeLeft.minutes}</span><p>Minutos</p></div>
        <div><span>{timeLeft.seconds}</span><p>Segundos</p></div>
        <h2>para nuestro gran día..</h2>
      </div>
    </section>
  );
}

export default Countdown;  */




import React, { useState, useEffect } from "react";

const Countdown = () => {
  const weddingDate = new Date("2025-11-08T10:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <h2 className="countdown-title">✨ Solo faltan...</h2>

      <div className="countdown-boxes">
        <div className="countdown-box">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">Días</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">Horas</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">Minutos</div>
        </div>
        <div className="countdown-box">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">Segundos</div>
        </div>
      </div>

      <h3 className="countdown-footer">...para nuestro gran día</h3>
    </section>
  );
};

export default Countdown;
