'use client';
import { useState } from 'react';
import { Rocket, FileDown } from 'lucide-react';
import React from 'react';
import Badge from './Badge';

const colors = ['green-400', 'red-400', 'blue-400', 'yellow-400', 'purple-400', 'pink-400', 'orange-400', 'teal-400'];

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
    githubLink: string;
    documentationLink: string;
  }

const SingleProject = ({title, description, detailedDescription, imageSrc, badges, githubLink, documentationLink}: SingleProjectProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <div className={`flex items-center mt-10 space-x-4 bg-black border-2 border-green-500 rounded-2xl px-6 py-4 w-[650px] shadow-md transition-all duration-500 cursor-pointer 
            ${expanded ? "flex-col scale-102 min-h-full py-8 pb-10" : "flex transform hover:scale-[1.02] h-[170px]"}`}
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
                    <Badge text={badgeText} color={getRandomColor()} key={`${index}`}/>
                )))}
            </div>
            <div className="flex flex-col pl-2 pr-2">
                {expanded ? (
                    githubLink && (
                        <a href={githubLink} target='_blank' className="pr-20 text-green-400 hover:underline">Github <Rocket /> </a>
                    )
                ) : (<p></p>)}

                {expanded ? (
                    documentationLink && (
                        <a href={documentationLink} download className="text-green-400 hover:underline">Download Documentation <FileDown /> </a>
                    )
                ) : (<p></p>)}
            </div>
        </div>
    </div>
    
    </>
  )
}

export default SingleProject;