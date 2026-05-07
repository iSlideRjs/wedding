import { useEffect, useRef, useState } from 'react';

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    let observer;
    const timeoutId = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              if (currentRef) observer.unobserve(currentRef);
            }
          });
        },

        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
      );

      if (currentRef) {
        observer.observe(currentRef);
      }
    }, 100);
    return () => {
      clearTimeout(timeoutId);
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
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
