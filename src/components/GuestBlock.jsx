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
        {/* Заголовок в каллиграфическом стиле */}
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

        {/* Заготовка под календарь — сделаем его следующим шагом */}
        <div className="calendar-placeholder">
          <h3 className="month-title">июль</h3>

          <div className="calendar-grid">
            {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((d) => (
              <div key={d} className="calendar-day weekday">
                {d}
              </div>
            ))}

            {days.map((day, index) => (
              <div key={index} className="calendar-day">
                {day === 4 ? (
                  <div className="selected-day d-flex align-items-center justify-content-center">
                    {day}
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
