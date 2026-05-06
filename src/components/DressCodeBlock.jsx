import { Container } from 'react-bootstrap';

function DressCodeBlock() {
  // Палитра: Оливковый, Шалфей, Бронза, Песочный, Беж, Камень
  const colors = ['oliva', 'brown', 'blue', 'grey', 'gold', 'indigo'];

  return (
    <section className="section-dresscode">
      <Container>
        <div className="dress-code-content">
          <div className="dress-header-anchor">
            <h2 className="dress-main-title">ДРЕСС</h2>
            <span className="dress-sub-title">код</span>
          </div>

          <p className="dress-description">
            МЫ БУДЕМ ПРИЗНАТЕЛЬНЫ, ЕСЛИ ВЫ ПОДДЕРЖИТЕ ЦВЕТОВУЮ ГАММУ НАШЕГО
            ТОРЖЕСТВА
          </p>

          <div className="color-palette">
            {colors.map((color, index) => (
              <div key={index} className="color-circle-wrapper">
                <div key={index} className={`color-circle ${color}`}></div>
              </div>
            ))}
          </div>
        </div>
        <p className="dress-description">
          АЛЬТЕРНАТИВНЫЙ СТИЛЬ ДЛЯ САМЫХ СМЕЛЫХ
        </p>
        <div className="color-palette">
          <div className="color-circle-wrapper">
            <div className="color-circle spider"></div>
          </div>
          <div className="color-circle-wrapper">
            <div className="color-circle venom"></div>
          </div>
        </div>
        <div className="dress-divider-wrapper">
          <hr className="dress-divider" />
        </div>

        <div className="wishes-content">
          <div className="wishes-header-anchor">
            <h2 className="wishes-main-title">НАШИ</h2>
            <span className="wishes-sub-title">пожелания</span>
          </div>

          <p className="wishes-text">
            ВАШИ УЛЫБКИ И ХОРОШЕЕ НАСТРОЕНИЕ ПОДАРЯТ НАМ НЕЗАБЫВАЕМОЕ СЧАСТЬЕ В
            ЭТОТ ДЕНЬ, А ПОЖЕЛАНИЯ В КОНВЕРТАХ ПОМОГУТ НАМ ОСУЩЕСТВИТЬ НАШИ
            МЕЧТЫ
            <br />
            <br />
            ПРОСИМ ВАС НЕ ПРИНОСИТЬ БОЛЬШИЕ БУКЕТЫ. ЕСЛИ ХОТИТЕ ПОРАДОВАТЬ НАС
            ЦВЕТАМИ, ПОЖАЛУЙСТА, ВЫБЕРИТЕ ОДИН НЕУПАКОВАННЫЙ ЦВЕТОК - ТОТ,
            КОТОРЫЙ АССОЦИИРУЕТСЯ У ВАС С НЕВЕСТОЙ. ВМЕСТЕ МЫ СОЗДАДИМ ОДИН
            ПРЕКРАСНЫЙ И СИМВОЛИЧНЫЙ БУКЕТ.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default DressCodeBlock;
