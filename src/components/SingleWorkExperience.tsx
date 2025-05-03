'use client';

interface SingleWorkExperienceProps {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}
  
export default function SingleWorkExperience({ title, company, startDate, endDate, description } : SingleWorkExperienceProps) {
    return (
        <>
            <div className="flex flex-col gap-1 relative pl-8 border-l-2 border-green-800 w-[650px]">
                <span className="text-sm font-medium text-white border-2 w-[100px] text-center"> {startDate} - {endDate} </span>
                <h3 className="text-xl font-bold text-green-400">{title}</h3>
                <span className="text-green-300 font-semibold">{company}</span>
                <p className="text-green-200 mt-2 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </>
    )
}

