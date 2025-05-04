'use client';

import SingleTechnology from "./SingleTechnology";

export default function Technologies() {
    return (
        <>
        <div className="no-scrollbar pl-10 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-green-400 text-center">Technologies</h1>
            <div className="grid grid-cols-2 gap-4 my-4 w-5/8">
                <SingleTechnology type="Languages" technologies={["C","C++","C#", "Python", "Java", "JavaScript","TypeScript", "React", "NextJS", "Lua", "Rails", "RSpec", "Bash", "Kotlin"]} />
                <SingleTechnology type="Frameworks and Tools" technologies={["Linux", "Ubuntu", "Rails", "Docker", "Databases", "React", "Angular", "Grafana", "Android Studio", "Bootstrap", "Tailwind", "Shadcn", "FastAPI"]} />
                <SingleTechnology type="Cloud" technologies={["Google Cloud", "AWS", "Docker", "Vercel", "OAuth", "PostgreSQL", "APIs", "Heroku", "Security"]} />
                <SingleTechnology type="Machine Learning" technologies={["Pandas", "PyTorch", "SciKit", "LLMs", "Finetuning", "RAG", "CNNs", "Transformers", "AI", "Vertex AI", "Intelligent Agents", "Databasing", "Python Client Libraries"]} />
            </div>
        </div>
        </>
    )

}