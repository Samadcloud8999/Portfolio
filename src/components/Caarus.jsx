import React, { useState, useEffect } from 'react';
import lydi1 from '../assets/lydi1.png';
import lydi2 from '../assets/lydi2.png';
import lydi3 from '../assets/lydi3.png';
import lydi4 from '../assets/lydi4.png';
import lydi5 from '../assets/lydi5.png';
import lydi6 from '../assets/lydi6.png';

export const Caarus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Массив изображений
  const images = [lydi1, lydi2, lydi3, lydi4, lydi5, lydi6];

  // Автопереключение
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Очистка таймера при размонтировании
  }, [images.length]);

  // Обработка свайпов для мобильных устройств
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <h2 className="carousel-title">Мои проекты</h2>
        <div className="carousel-slides">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
