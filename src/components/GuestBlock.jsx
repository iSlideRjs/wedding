function GuestBlock() {
  const days = [
    '',
    '',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  return (
    <section className="section-olive">
      <div className="guest-content">
        <h2 className="cursive-title">Дорогие гости!</h2>

        {/* Основной текст приглашения */}
        <div className="guest-text-wrapper">
          <p className="guest-text">
            В НАШЕЙ ЖИЗНИ СКОРО СОСТОИТСЯ ВАЖНОЕ СОБЫТИЕ — НАША СВАДЬБА.
          </p>
          <p className="guest-text">
            МЫ ПРИГЛАШАЕМ ВАС И БУДЕМ РАДЫ ПРОВЕСТИ ЭТОТ ОСОБЕННЫЙ ДЕНЬ В КРУГУ
            САМЫХ БЛИЗКИХ ЛЮДЕЙ.
          </p>
        </div>

        <div className="calendar-placeholder">
          <h3 className="month-title">Июль</h3>

          <div className="calendar-grid">
            {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((d) => (
              <div key={d} className="calendar-day weekday">
                {d}
              </div>
            ))}

            {days.map((day, index) => (
              <div key={index} className="calendar-day">
                {day === 4 ? (
                  <div className="selected-day d-flex align-items-center justify-content-center position-relative">
                    {/* SVG Сердечко на заднем плане */}
                    <svg
                      className="heart-marker"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>

                    {/* Сама цифра поверх сердечка */}
                    <span className="day-number">{day}</span>
                  </div>
                ) : (
                  day
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuestBlock;
