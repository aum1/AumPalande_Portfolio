'use client';
import { useState } from 'react';
import React from 'react';
import Badge from './Badge';

const colors = ['green-400', 'red-400', 'blue-400', 'yellow-400', 'purple-400', 'pink-400', 'orange-400', 'teal-400', 'gray-400'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

interface SingleProjectProps {
    title: string;
    description: string;
    detailedDescription: string;
    imageSrc: string;
    badges: string[];
  }

const SingleProject = ({title, description, detailedDescription, imageSrc, badges}: SingleProjectProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <div className={`flex items-center w-full mt-10 space-x-4 bg-black border-2 border-green-500 rounded-full px-6 py-4 max-w-2xl shadow-md transition-all duration-500  cursor-pointer 
            ${expanded ? "flex-col rounded-2xl scale-105 min-h-full py-8 pb-10" : "flex transform hover:scale-[1.02] h-[170px]"}`}
            onClick={toggleExpand}>
            <div></div>
        <img src={imageSrc} alt="Project" className={`rounded-full object-cover${expanded ? "w-24 h-24 mb-4" : "w-12 h-12 mb-4"}`} />
        <div className="flex flex-col">
            <h2 className="green-500 xl font-bold">{title}</h2>
            <p className={`white sm pb-2`}>
                {expanded ? detailedDescription : description}
            </p>
            <div className="flex flex-row">
                {badges && (badges.map((badgeText, index) => (
                    <Badge text={badgeText} color={getRandomColor()}/>
                )))}
            </div>
        </div>
    </div>
    
    </>
  )
}

export default SingleProject;