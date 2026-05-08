import { useState, useEffect } from 'react';
import '../envelope.css'; // Импортируем наши стили

// ЕСЛИ ПЕЧАТЬ ЛЕЖИТ В ПАПКЕ src/assets, раскомментируй строку ниже:
import mySeal from '../assets/heart.png';

function EnvelopeCover({ onComplete }) {
  const [isOpening, setIsOpening] = useState(false);
  useEffect(() => {
    // 1. При загрузке конверта отключаем скролл
    document.body.style.overflow = 'hidden';

    // 2. Функция очистки: когда конверт удалится, возвращаем скролл
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  const handleSealClick = () => {
    setIsOpening(true);

    // 1. Возвращаем скролл синхронно с началом появления сайта (через 0.5 сек)
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 500);

    // 2. Полностью удаляем конверт из кода, как и раньше (через 2.5 сек)
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 4000);
  };

  return (
    <div className={`envelope-overlay ${isOpening ? 'is-opening' : ''}`}>
      {/* ВОТ ОНА, НАША СЦЕНА, СОХРАНЯЮЩАЯ ПРОПОРЦИИ */}
      <div className="envelope-scene">
        <div className="flap-wrapper left">
          <div className="flap left"></div>
        </div>

        <div className="flap-wrapper right">
          <div className="flap right"></div>
        </div>

        <div className="flap-wrapper bottom">
          <div className="flap bottom">
            <div className="bottom-text">
              нажмите на сердце,
              <br />
              чтобы открыть
            </div>
          </div>
        </div>

        <div className="flap-wrapper top">
          <div className="flap top">
            <div className="top-text">
              <h1 className="envelope-main-title">ПРИГЛАШЕНИЕ</h1>
              <h2 className="envelope-sub-title">НА СВАДЬБУ</h2>
            </div>
          </div>
        </div>

        <div className="seal-container">
          <button className="wax-seal" onClick={handleSealClick}>
            <img src={mySeal} alt="Открыть" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnvelopeCover;
