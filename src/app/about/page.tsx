'use client'
import NavigationBar from '@/components/NavigationBar';
import WorkExperience from '@/components/WorkExperience';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <div>
      <NavigationBar />
      <AboutMe />
      <h1 className="text-3xl text-center font-bold text-green-400 pr-10">Experience</h1>
      <WorkExperience/>
      <div className="mb-10"></div>
    </div>
  );
}


function AboutMe() {
  return (
    <>
        <div className="w-1/2 flex flex-row justify-center mx-auto mb-20">
            <img className="w-1/2 h-1/2 my-auto rounded-full" src="other/smaller_ring_image.png" alt="Self image"/>
            <div className="pl-12 align-text-middle">
                <h1 className="text-green-400 text-5xl leading-relaxed mb-4">Aum Palande</h1>
                <p className="text-green-200 text-lg leading-relaxed mb-4">
                    I am a passionate computer science student at Texas A&M University, specializing in software development and machine learning. I have a strong background and foundation in Python, Java, C++, C#, JavaScript, Ruby, and Ruby On Rails. But, I am always eager to learn new technologies and frameworks.
                </p>
                <p className="text-green-200 text-lg leading-relaxed mb-4">
                    My interests include machine learning, cybersecurity, optimization, and full stack development. I enjoy working on projects that challenge me to think critically and creatively. In my free time, I like to explore new frameworks and build cool projects.
                </p>
            </div>
        </div>
    </>
  );
}