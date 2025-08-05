import React, { useState } from 'react';
import './SpinWheel.css';

const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const segments = [
    {
      color: '#FFA500',
      text: '₹99\nBurger Meal',
      logo: '🍔',
      angle: 0
    },
    {
      color: '#FF69B4',
      text: '₹400 Off on\nminimum purchase of ₹1999',
      logo: '💳',
      angle: 90
    },
    {
      color: '#4169E1',
      text: 'Free 1 Year\nGOLD MAX MEMBERSHIP',
      logo: '⭐',
      angle: 180
    },
    {
      color: '#32CD32',
      text: 'Buy 3 Boxers\nat ₹799',
      logo: '👕',
      angle: 270
    }
  ];

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    
    // Generate random rotation (multiple full rotations + random final position)
    const minRotation = 1440; // 4 full rotations
    const maxRotation = 2160; // 6 full rotations
    const randomRotation = Math.random() * (maxRotation - minRotation) + minRotation;
    const newRotation = rotation + randomRotation;
    
    setRotation(newRotation);

    // Reset spinning state after animation completes
    setTimeout(() => {
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="spin-wheel-container">
      <div className="header">
        <button className="close-btn">×</button>
        <h2>You've earned a voucher!</h2>
        <h1 className="spin-win-title">Spin & Win</h1>
      </div>

      <div className="wheel-container">
        <div className="wheel-pointer"></div>
        <div 
          className="wheel"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'transform 3s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
          }}
        >
          {segments.map((segment, index) => (
            <div
              key={index}
              className="segment"
              style={{
                backgroundColor: segment.color,
                transform: `rotate(${segment.angle}deg)`
              }}
            >
              <div className="segment-content">
                <div className="segment-logo">{segment.logo}</div>
                <div className="segment-text">{segment.text}</div>
              </div>
            </div>
          ))}
          <div className="wheel-center"></div>
        </div>
      </div>

      <button 
        className={`spin-button ${isSpinning ? 'spinning' : ''}`}
        onClick={handleSpin}
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
};

export default SpinWheel;