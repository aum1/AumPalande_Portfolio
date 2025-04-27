'use client';
import SingleProject from '@/components/SingleProject';

const projectData = [
    {
        title: "Compiler for CO2",
        description: "Our Compiler converts and executes the code, following the language of CO2. This language allows for features such as if statements, for loops, while loops, functions, and more.",
        detailedDescription: "Our Compiler converts and executes the code, following the language of CO2. This language allows for features such as if statements, for loops, while loops, functions, and more. Our compiler takes in an input file and pipelines the inputs to a scanner, parser, type checker, optimizer, and a code generator. The compiler can optimize the code by running constant folding, constant propagation, copy propagation, orphan function elimination, common subexpression elimination, and dead code elimination. Our code compiles and generates machine code for the DLX architecture, which contains a maximum of 24 general use registers, 7 special registers, and memory. This project ended up being around 12 thousand lines of code.",
        imageSrc: "/project_images/computer.png",
        badges: ["Java", "Optimizations", "Co2", "Compilers", "Type Checking"],
        githubLink: "https://github.com/aum1/co2-compiler",
        documentationLink: "pdfs/CSCE434_Project_Report.pdf",
    },
    {
        title: "Gatekeeper - Google Cloud Access Control",
        description: "The Gatekeeper project uses Large Language Models to generate accurate allow policies for the Google Cloud IAM service from plain-English prompts.",
        detailedDescription: "The Gatekeeper project aims to help users create policies on the Google Cloud Platform (GCP) for controlling user abilities.  The project uses Large Language Models (LLM) to generate these policies from plain-English text provided by the user.  The goal is to simplify the manual configuration of policies, which can be complex due to the scope of GCP's services.  The system includes a frontend for user interaction and a backend for generating and verifying policies. The project emphasizes thorough testing, data privacy, and ethical considerations. The project was developed by a team of four students under the mentorship of a Google Software Engineering Manager.",
        imageSrc: "/project_images/google.png",
        badges: ["LLMs", "Google Cloud", "Cybersecurity", "Synthetic Data", "Finetuning", "FastAPI"],
        githubLink: "https://github.com/aum1/gatekeeper",
        documentationLink: "pdfs/Final Report - Gatekeeper.pdf",
    },
    {
        title: "Student Knowledge System",
        description: "The Student Knowledge System is a way for professor to be able to connect with their students more, and allows for the professors to remember legacy students",
        detailedDescription: "Professors have lots of students. A professor should be able to remember what they thought of the student when they took a course, especially when a student asks for a Letter of Recommendation, a TA position, or anything else. The Student Knowledge System is a way for professors to be able to connect with their students more, and allows for the professors to remember legacy students. Professors are able to upload rosters directly from Howdy (Texas A&M's LMS), and then edit comments about them which are saved in a database. The professor should be able to filter and find their students easily. Similarly, the professor can also use quizzes in order to learn the names and faces of the students in their current sections.",
        imageSrc: "/project_images/ruby.png",
        badges: ["Ruby on Rails", "PostgreSQL", "AWS S3 Bucket", "RSpec"],
        githubLink: "https://github.com/nishant-basu-tamu3/student_knowledge_system",
        documentationLink: "pdfs/Final Report - Student Knowledge System.pdf",
    },
    {
        title: "TeachMeHub - A Medical Student Study Hub",
        description: "Our curated content is here for medical students to use and learn. Our AI is trained on an extensive range of textbooks, peer-reviewed articles, and authoritative medical resources.",
        detailedDescription: "Our curated content is here for medical students to use and learn. Our AI is trained on an extensive range of textbooks, peer-reviewed articles, and authoritative medical resources. Our goal for the agent is to allow people to really dive deep into their medical content, while still being able to utilize AI. This ensures you receive accurate and up-to-date information, helping you stay on top of your studies. Our AI agent not only provides you with relevant information but also helps you understand and retain it through interactive explanations and personalized study aids. You can ask questions about concepts that you don’t understand or even ask for a rewording on a subconcept.",
        imageSrc: "/project_images/stethoscope.png",
        badges: ["LLMs", "Finetuning", "RAG", "Google Cloud Vertex AI"],
        githubLink: "",
        documentationLink: "",
    },
    {
        title: "Aum Palande's Portfolio",
        description: "Well, its this portfolio website! Built using Next.js and Tailwind CSS.",
        detailedDescription: "This is my portfolio website, built using Next.js and Tailwind CSS. It showcases my projects, skills, and experience. The website is responsive and works well on all devices.",
        imageSrc: "/project_images/react.png",
        badges: ["TypeScript", "Next.js", "Tailwind CSS"],
        githubLink: "https://github.com/aum1/AumPalande_Portfolio",
        documentationLink: "",
    },
]


const ProjectBuilder = () => {
    return (
        <div className="no-scrollbar pl-10 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold text-green-400 pr-10">Portfolio</h1>
            <div className="w-full grid grid-cols-2 mt-4 mb-4">
                {projectData.map((project, index) => (
                    <SingleProject
                        key={index}
                        title={project.title}
                        description={project.description}
                        detailedDescription={project.detailedDescription}
                        imageSrc={project.imageSrc}
                        badges={project.badges}
                        githubLink={project.githubLink}
                        documentationLink={project.documentationLink}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectBuilder;