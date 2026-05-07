import { useEffect, useRef, useState } from 'react';

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Если блок появился на экране хотя бы на 15%
          if (entry.isIntersecting) {
            setVisible(true);
            // Прекращаем следить, чтобы анимация сработала только один раз
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }, // 15% видимости для старта
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
