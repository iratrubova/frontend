import React, { useState, useEffect } from 'react';
import './Slider.css'; // Ensure this file includes the necessary CSS for animations
import Image1 from '../img/1.jpg';
import Image2 from '../img/2.jpg';
import Image3 from '../img/3.jpg';

const Slider = () => {
  // Predefined array of image URLs
  const images = [Image1, Image2, Image3];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000); // Change slides every 5 seconds

    return () => clearTimeout(timer);
  }, [current, length]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {images.map((image, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <img src={image} alt="slide" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;




