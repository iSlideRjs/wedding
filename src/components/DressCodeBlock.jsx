import { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import FadeInSection from './FadeInSection';

function DressCodeBlock() {
  const colors = ['oliva', 'brown', 'blue', 'grey', 'gold', 'indigo'];
  const [linesVisible, setLinesVisible] = useState(false);
  const wishesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLinesVisible(true);
          observer.disconnect();
        }
      },

      { threshold: 0, rootMargin: '0px 0px -25% 0px' },
    );

    if (wishesRef.current) {
      observer.observe(wishesRef.current);
    }

    return () => observer.disconnect();
  }, []);
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

        <FadeInSection>
          <div
            ref={wishesRef}
            className={`wishes-content ${linesVisible ? 'animate-lines' : ''}`}
          >
            <div className="line-mask">
              <div className="reveal-text wishes-header-anchor">
                <h2 className="wishes-main-title">НАШИ</h2>
                <span className="wishes-sub-title">пожелания</span>
              </div>
            </div>

            <div className="line-mask">
              <p className="reveal-text wishes-text">
                ВАШИ УЛЫБКИ И ХОРОШЕЕ НАСТРОЕНИЕ ПОДАРЯТ НАМ НЕЗАБЫВАЕМОЕ
                СЧАСТЬЕ В ЭТОТ ДЕНЬ, А ПОЖЕЛАНИЯ В КОНВЕРТАХ ПОМОГУТ НАМ
                ОСУЩЕСТВИТЬ НАШИ МЕЧТЫ.
              </p>
            </div>

            <div className="line-mask">
              <p className="reveal-text wishes-text">
                ПРОСИМ ВАС НЕ ПРИНОСИТЬ БОЛЬШИЕ БУКЕТЫ. ЕСЛИ ХОТИТЕ ПОРАДОВАТЬ
                НАС ЦВЕТАМИ, ПОЖАЛУЙСТА, ВЫБЕРИТЕ ОДИН НЕУПАКОВАННЫЙ ЦВЕТОК -
                ТОТ, КОТОРЫЙ АССОЦИИРУЕТСЯ У ВАС С НЕВЕСТОЙ.
              </p>
            </div>

            <div className="line-mask">
              <p className="reveal-text wishes-text">
                ВМЕСТЕ МЫ СОЗДАДИМ ОДИН ПРЕКРАСНЫЙ И СИМВОЛИЧНЫЙ БУКЕТ.
              </p>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

export default DressCodeBlock;
