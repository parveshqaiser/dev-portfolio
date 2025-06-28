

import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {


    const data = [
    {
        title: "Experience",
        content: (
            <main className="flex flex-col gap-[30px]">
                <nav className="my-5"> 
                    <h3 className="text-[#f4f4f4] text-[1.8rem] font-[600]">Full Stak Developer</h3>  
                    <span className="text-blue-400 my-10">Jan 2025 - Present</span> <br></br>
                    <span className="text-blue-400 my-10">Busitron IT Solutions Private Ltd</span>
                    <blockquote className="text-xs font-normal text-neutral-500 md:text-sm dark:text-neutral-200">
                        As a Full Stack Developer, I built scalable dashboards and internal tools using React.js, Node.js, MongoDB, and Tailwind CSS—now actively used in production. I focused on clean component architecture, improved form performance with React Hook Form, led API integrations, and contributed to code quality through reviews and unit testing.
                    </blockquote>
                </nav>

                <nav className="my-5"> 
                    <h3 className="text-[#f4f4f4] text-[1.8rem] font-[600]">Full Stak Developer Intern</h3>  
                   <span className="text-blue-400 my-10">July 2024 - Sept 2024</span> <br></br>
                    <span className="text-blue-400 my-10">Zidio Development</span>
                    <blockquote className="mb-8 text-xs font-normal text-neutral-500 md:text-sm dark:text-neutral-200">
                        As a Full Stack Developer Intern, I independently built a complete MERN stack application, managing both frontend and backend. I implemented API routing with Express.js, applied the full software development life cycle from HLD to LLD, and used React Hooks to handle complex component state logic.
                    </blockquote>
                </nav>   

                <nav className="my-5"> 
                    <h3 className="text-[#f4f4f4] text-[1.8rem] font-[600]">Front End Developer</h3>  
                   <span className="text-blue-400 my-10">April 2023 - May 2024</span> <br></br>
                    <span className="text-blue-400 my-10">Entro Labs IT Solution Private Ltd</span>
                    <blockquote className="mb-8 text-xs font-normal text-neutral-500 md:text-sm dark:text-neutral-200">
                        As a Full Stack Developer Intern, I independently built a complete MERN stack application, managing both frontend and backend. I implemented API routing with Express.js, applied the full software development life cycle from HLD to LLD, and used React Hooks to handle complex component state logic.
                    </blockquote>
                </nav>
                <nav className="my-5"> 
                    <h3 className="text-[#f4f4f4] text-[1.8rem] font-[600]">Trainee</h3>  
                   <span className="text-blue-400 my-10">October 2022 - March 2023</span> <br></br>
                    <span className="text-blue-400 my-10">Naresh I Technologies</span>
                    <blockquote className="mb-8 text-xs font-normal text-neutral-500 md:text-sm dark:text-neutral-200">
                        As a Full Stack Developer Intern, I independently built a complete MERN stack application, managing both frontend and backend. I implemented API routing with Express.js, applied the full software development life cycle from HLD to LLD, and used React Hooks to handle complex component state logic.
                    </blockquote>
                </nav>                    
            </main>
        ),
    },
    {
        title: "Education",
        content: (
            <main className="flex flex-col gap-[30px]">
                <nav>
                    <h3 className="text-[#f4f4f4] text-[1.8rem] font-[600]">Bacherlor of Technology</h3>  
                </nav>                 
            </main>
        ),
    },
    ];

    return (
        <div className="relative overflow-clip min-h-screen" id="experience">
            <Timeline data={data} />
        </div>
    );
}

export default Experience;





