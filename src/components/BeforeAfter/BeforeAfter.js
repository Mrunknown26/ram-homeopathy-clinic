import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BeforeAfter.css';

const BeforeAfter = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After Treatment"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  // Add global event listeners to catch mouseup outside the container
  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div
      className="before-after-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div
        className="image-wrapper after-image"
        style={{ backgroundImage: `url(${afterImage})` }}
      >
        <div className="label-wrapper align-right">
          <span className="ba-label label-after">{afterLabel}</span>
        </div>
      </div>

      {/* Before Image (Foreground, Clipped) */}
      <div
        className="image-wrapper before-image"
        style={{
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <div className="label-wrapper align-left">
          <span className="ba-label label-before">{beforeLabel}</span>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="slider-line"></div>
        <div className="slider-button">
          <ChevronLeft size={18} />
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
