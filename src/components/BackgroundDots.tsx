'use client';
import React, { useEffect, useState } from 'react';

const BackgroundDots = () => {
    const dots = {
        dot1: { top: 0, left: 10.4, size: 3 },
        dot2: { top: 3.45, left: 84.7, size: 6 },
        dot3: { top: 6.9, left: 92.1, size: 9 },
        dot4: { top: 10.35, left: 5.9, size: 2 },
        dot5: { top: 13.8, left: 17.6, size: 6 },
        dot6: { top: 17.25, left: 82.2, size: 8 },
        dot7: { top: 20.7, left: 11.3, size: 4 },
        dot8: { top: 24.15, left: 86.4, size: 3 },
        dot9: { top: 27.6, left: 3.2, size: 8 },
        dot10: { top: 31.05, left: 38.7, size: 9 },
        dot11: { top: 34.5, left: 6.1, size: 2 },
        dot12: { top: 37.95, left: 80.2, size: 3 },
        dot13: { top: 41.4, left: 13.3, size: 4 },
        dot14: { top: 44.85, left: 91.8, size: 5 },
        dot15: { top: 48.3, left: 8.9, size: 3 },
        dot16: { top: 51.75, left: 96.0, size: 4 },
        dot17: { top: 55.2, left: 18.2, size: 3 },
        dot18: { top: 58.65, left: 87.6, size: 7 },
        dot19: { top: 62.1, left: 92.5, size: 9 },
        dot20: { top: 65.55, left: 2.6, size: 2 },
        dot21: { top: 69.0, left: 81.7, size: 2 },
        dot22: { top: 72.45, left: 16.4, size: 6 },
        dot23: { top: 75.9, left: 94.1, size: 5 },
        dot24: { top: 79.35, left: 7.3, size: 8 },
        dot25: { top: 82.8, left: 88.0, size: 2 },
        dot26: { top: 86.25, left: 4.1, size: 7 },
        dot27: { top: 89.7, left: 83.5, size: 3 },
        dot28: { top: 68.15, left: 15.1, size: 3 },
        dot29: { top: 63.6, left: 90.4, size: 3 },
        dot30: { top: 74, left: 0.6, size: 8 },
        dot31: { top: 1.1, left: 10.0, size: 8 },
        dot32: { top: 18.5, left: 83.0, size: 3 },
        dot33: { top: 5.7, left: 74.1, size: 3 },
        dot34: { top: 16.2, left: 50.9, size: 4 },
        dot35: { top: 0.3, left: 62.4, size: 5 },
        dot36: { top: 18.9, left: 41.5, size: 3 },
        dot37: { top: 13.4, left: 81.3, size: 8 },
    };

  return (
    <div>
      {Object.entries(dots).map(([key, dot]) => (
        <div key={key} style={{
            position: 'absolute',
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: 'green',
            borderRadius: '50%',
            opacity: 0.8,
            transition: 'all 0.3s ease-in-out',
        }}> 
        </div>
      ))}
    </div>
  );
};

export default BackgroundDots;
