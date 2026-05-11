import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const TARGET_DATE = new Date(2026, 6, 4, 12, 30, 0).getTime();

function calculateTimeLeft() {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00' };
  }

  const addZeros = (num) => String(num).padStart(2, '0');

  return {
    days: addZeros(Math.floor(difference / (1000 * 60 * 60 * 24))),
    hours: addZeros(Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: addZeros(Math.floor((difference / 1000 / 60) % 60)),
    seconds: addZeros(Math.floor((difference / 1000) % 60)),
  };
}

function RsvpBlock() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-rsvp-final">
      <Container>
        <div className="rsvp-card">
          <div className="rsvp-top">
            <div className="rsvp-names-curved">
              <svg viewBox="0 0 300 60" width="100%" height="100%">
                <path
                  id="name-curve"
                  d="M 25 50 Q 150 3 280 50"
                  fill="transparent"
                />
                <text fill="#f0e9dc" className="curved-text">
                  <textPath
                    href="#name-curve"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    DMITRIY & ALEKSANDRA
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="rsvp-ornament">
              <span>ღ</span>
            </div>

            <div className="rsvp-date-wrapper">
              <hr className="date-line" />
              <p className="rsvp-date">04.07.2026</p>
              <hr className="date-line" />
            </div>
            <div className="rsvp-countdown-wrapper">
              <p className="countdown-title">Осталось времени:</p>

              <div className="rsvp-countdown">
                <div className="countdown-item">
                  <span className="countdown-value">{timeLeft.days}</span>
                  <span className="countdown-label">дней</span>
                </div>
                <span className="countdown-separator">:</span>

                <div className="countdown-item">
                  <span className="countdown-value">{timeLeft.hours}</span>
                  <span className="countdown-label">часов</span>
                </div>
                <span className="countdown-separator">:</span>

                <div className="countdown-item">
                  <span className="countdown-value">{timeLeft.minutes}</span>
                  <span className="countdown-label">минут</span>
                </div>
                <span className="countdown-separator">:</span>

                <div className="countdown-item">
                  <span className="countdown-value">{timeLeft.seconds}</span>
                  <span className="countdown-label">секунд</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rsvp-center">
            <h2 className="rsvp-main-text">
              БУДЕМ
              <br />
              СЧАСТЛИВЫ
              <br />
              ВИДЕТЬ ВАС!
            </h2>
          </div>

          <div className="rsvp-bottom">
            <p className="rsvp-subtitle">ПРОСИМ ОТВЕТИТЬ НА ПАРУ ВОПРОСОВ</p>
            <button
              onClick={() =>
                window.open(
                  'https://forms.yandex.ru/u/69fba43a6d2d7300194df5d7/',
                  '_blank',
                )
              }
              className="btn-form"
            >
              ЗАПОЛНИТЬ АНКЕТУ
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default RsvpBlock;
