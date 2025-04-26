import React from 'react';

interface BadgeProps {
  text: string;
  color: string; 
}

const Badge: React.FC<BadgeProps> = ({ text, color }) => {
  return (
    <div className={`bg-${color} text-${color} text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm border-2 border-${color} border-opacity-50 w-flex} border`}>
      {text}
    </div>
  );
};

export default Badge;
