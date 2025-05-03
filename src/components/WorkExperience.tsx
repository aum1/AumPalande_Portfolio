'use client';
import React from 'react'
import { useState } from 'react';
import SingleWorkExperience from './SingleWorkExperience';
import { start } from 'repl';


const experienceData = [
    {
        title: "MS, Computer Science",
        company: "Texas A&M University",
        startDate: "2025",
        endDate: "2026",
        description: "Future Graduate Student at Texas A&M University.",
    },
    {
        title: "Compiler Design TA",
        company: "Texas A&M University",
        startDate: "2024",
        endDate: "2025",
        description: "Teachning Assistant for Compiler Design course. I help students with their projects and assignments, and also help them with their exams. Not only that, but I tested and created grading scripts to grade efficiently.",
    },
    {
        title: "Software Engineering Intern",
        company: "Omnipayments",
        startDate: "2024",
        endDate: "2024",
        description: "At OmniPayment, I created and designed internal and external dashboards in Grafana. When I worked with the team remotely in India, I also developed shell scripts for databasing.",
    },
    {
        title: "Software Engineering Intern",
        company: "Sabre Corporation",
        startDate: "2023",
        endDate: "2023",
        description: "I worked in Java as part of the Digital Connect team, and worked on converting the monolith application to a microservices platform. As part of the stateless payment service team, I helped create the wiremock test cases.",
    },
    {
        title: "Code Coach",
        company: "theCoderSchool",
        startDate: "2022",
        endDate: "2022",
        description: "Following freshman year of college, I worked at an after-school program for kids called theCoderSchool. I started out being a normal coach, but gained a lot of experience and started becoming a higher-up coach. During my time there, I taught a variety of classes, including private classes, as well as group classes. I taught elementary to high school students about Java, Python, HTML, Scratch, Unity, Roblox Studio, and Minecraft Development.",
    },
    {
        title: "BS, Computer Science",
        company: "Texas A&M University",
        startDate: "2021",
        endDate: "2025",
        description: "Relevant Course work: Discrete Structures, Data Structures & Algorithms, Design and Analysis of Algorithms, Compiler Design, Cloud Computing, Artificial Intelligence, Cryptography, Software Engineering (MS level), Machine Learning (MS level), Cybersecurity (MS level)"
    },
    {
        title: "Advanced Referee",
        company: "AYSO",
        startDate: "2014",
        endDate: "2019",
        description: "I was a referee for AYSO, which is a youth soccer organization. I started out as a normal referee, but gained a lot of experience and started becoming a higher-up referee. I started out as a regional referee, became intermediate, and then an Advanced referee. The different levels all required game counts, fitness tests, and written exams. After reaching intermediate, I also became a Grade 8 referee for USSF. I got invited to referee in numerous, prestigious tournaments, including the Area Cup. ",
    }
]

export default function WorkExperience() {
    return (
        <>
        <div className="no-scrollbar pl-10 flex flex-col items-center justify-center min-h-screen">
            <div className="w-1/2 grid grid-cols-1 gap-15">
                {experienceData.map((experience, index) => (
                    <SingleWorkExperience
                        key={index}
                        title={experience.title}
                        company={experience.company}
                        description={experience.description}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                    />
                ))}
            </div>
        </div>
        </>
    )

}
