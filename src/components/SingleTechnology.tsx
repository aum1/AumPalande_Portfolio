'use client';

interface SingleTechnologyProps {
    type: string;
    technologies: string[];
}


export default function SingleTechnology({type, technologies} : SingleTechnologyProps) {
    return (
        <div className="border-2 h-60 border-red-800 flex rounded-lg flex-col">
            <h1 className="text-2xl font-bold text-green-400 px-10 pt-5 pb-10">{type}</h1>
            <div className="flex flex-wrap mt-4 pl-6">
                {technologies.map((technology: string, index: number) => (
                    <div key={index} className=" bg-red-800 h-7 text-xs w-flex rounded-lg shadow-md flex items-center justify-center mr-4 mb-2">
                        <p className="text-white text-center px-3">{technology}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}