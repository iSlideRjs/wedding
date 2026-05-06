import { Container } from 'react-bootstrap';

function RsvpBlock() {
  return (
    <section className="section-rsvp-final">
      <Container>
        <div className="rsvp-card">
          <div className="rsvp-top">
            {/* Имена дугой (SVG) */}
            <div className="rsvp-names-curved">
              <svg viewBox="0 0 300 60" width="100%" height="100%">
                {/* Невидимая дуга (квадратичная кривая Безье) */}
                <path
                  id="name-curve"
                  d="M 25 50 Q 150 3 280 50"
                  fill="transparent"
                />

                {/* Текст, пущенный по этой дуге */}
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
