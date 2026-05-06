import { Container } from 'react-bootstrap';

function TimingBlock() {
  const events = [
    {
      time: '12:30',
      title: 'ЦЕРЕМОНИЯ БРАКОСОЧЕТАНИЯ',
    },
    { time: '13:00', title: 'ФОТОСЕССИЯ ПО ГОРОДУ', desc: '' },
    {
      time: '17:00',
      title: 'СБОР, ФОТОСЕССИЯ, ПОЗДРАВЛЕНИЯ',
      desc: 'МЫ ХОТИМ СДЕЛАТЬ ФОТО СО ВСЕМИ ГОСТЯМИ, ЧТОБЫ ЗАПЕЧАТЛЕТЬ ЭТОТ ДЕНЬ',
    },
    { time: '17:30', title: 'ПРАЗДНИЧНЫЙ УЖИН', desc: '' },

    { time: '21:00', title: 'ВЫНОС ТОРТА', desc: 'ВЫКУП ПЕРВОГО КУСКА' },
    {
      time: '23:00',
      title: 'ЗАВЕРШЕНИЕ ВЕЧЕРА',
      desc: 'ИЛИ НЕТ?',
    },
  ];

  return (
    <section className="section-timing">
      <Container>
        <div className="timing-title-wrapper">
          <h2 className="timing-main-title">ПРОГРАММА</h2>
          <span className="timing-sub-title">торжества</span>
        </div>

        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="time-value">{event.time}</div>
              <div className="event-info">
                <h4 className="event-title">{event.title}</h4>
                {event.desc && <p className="event-desc">{event.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TimingBlock;
