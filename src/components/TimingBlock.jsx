import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

function TimingBlock() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Теперь мы просто передаем состояние видимости напрямую
        // Если блок видно — true, если ушел с экрана — false
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Срабатывает, когда видно хотя бы 20% блока
      },
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      className={`section-timing-final ${isVisible ? 'animate-on-scroll' : ''}`}
      ref={sectionRef}
    >
      <Container>
        <div className="timing-title-wrapper">
          <h2 className="timing-main-title">ПРОГРАММА</h2>
          <span className="timing-sub-title">торжества</span>
        </div>

        <div className="timeline-sequential">
          <div className="timeline-spine">
            <div className="sequential-runner">♥</div>
          </div>

          <div className="timeline-row-fixed left-side point-1">
            <div className="timeline-content">
              <span className="timeline-time">12:30</span>
              <span className="timeline-title">Церемония бракосочетания</span>
            </div>
            <div className="timeline-empty"></div>
          </div>

          <div className="timeline-row-fixed right-side point-2">
            <div className="timeline-content">
              <span className="timeline-time">13:00</span>
              <span className="timeline-title">Фотосессия по городу</span>
            </div>
            <div className="timeline-empty"></div>
          </div>

          <div className="timeline-row-fixed left-side point-3">
            <div className="timeline-content">
              <span className="timeline-time">16:45</span>
              <span className="timeline-title">Сбор на банкет</span>
            </div>
            <div className="timeline-empty"></div>
          </div>

          <div className="timeline-row-fixed right-side point-4">
            <div className="timeline-content">
              <span className="timeline-time">17:00</span>
              <span className="timeline-title">Фотосессия, Поздравления</span>
              <p class="event-desc">
                МЫ ХОТИМ СДЕЛАТЬ ФОТО СО ВСЕМИ ГОСТЯМИ, ЧТОБЫ ЗАПЕЧАТЛЕТЬ ЭТОТ
                ДЕНЬ
              </p>
            </div>
            <div className="timeline-empty"></div>
          </div>

          <div className="timeline-row-fixed left-side point-5">
            <div className="timeline-content">
              <span className="timeline-time">17:30</span>
              <span className="timeline-title">Праздничный банкет</span>
            </div>
            <div className="timeline-empty"></div>
          </div>

          <div className="timeline-row-fixed right-side point-6">
            <div className="timeline-content">
              <span className="timeline-time">21:00</span>
              <span className="timeline-title">Вынос торта</span>
              <p class="event-desc">ВЫКУП ПЕРВОГО КУСКА</p>
            </div>
            <div className="timeline-empty"></div>
          </div>

          <div className="timeline-row-fixed left-side point-7">
            <div className="timeline-content">
              <span className="timeline-time">23:00</span>
              <span className="timeline-title">Завершение вечера</span>
              <p class="event-desc">ИЛИ НЕТ?</p>
            </div>
            <div className="timeline-empty"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TimingBlock;
