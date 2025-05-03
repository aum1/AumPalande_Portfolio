import React from 'react';

interface BadgeProps {
  text: string;
  color: string; 
}
// const colors = ['green-400', 'red-400', 'blue-400', 'yellow-400', 'purple-400', 'pink-400', 'orange-400', 'teal-400', 'gray-400'];
const Badge: React.FC<BadgeProps> = ({ text, color }) => {
  return (
    <div className={`text-${color} text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm border-2 border-opacity-50`}>
      {text}
    </div>
  );
};

export default Badge;
