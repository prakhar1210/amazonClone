import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import CSS file for styling

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      // Left arrow key
      goToPrevious();
    } else if (event.keyCode === 39) {
      // Right arrow key
      goToNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex]);

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="random"
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="carousel-indicator">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? "active" : ""}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
      <button className="prev-button" onClick={goToPrevious}>
        &lt;
      </button>
      <button className="next-button" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
