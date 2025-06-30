

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
                    <p className="text-purple-400">Jan 2025 - Present</p>
                    <p className="text-purple-400">Busitron IT Solutions Private Ltd</p>
                    <blockquote className="text-xs font-mono text-neutral-500 md:text-sm dark:text-neutral-200 mt-2">
                        As a Full Stack Developer, I built scalable dashboards and internal tools using React.js, Node.js, MongoDB, and Tailwind CSS—now actively used in production. I focused on clean component architecture, improved form performance with React Hook Form, led API integrations, and contributed to code quality through reviews and unit testing.
                    </blockquote>
                </nav>

                <nav className="my-5"> 
                    <h3 className="text-[#f4f4f4] text-[1.8rem] font-[600]">Full Stak Developer Intern</h3>  
                    <p className="text-purple-400">July 2024 - Sept 2024</p>
                    <p className="text-purple-400">Zidio Development</p>
                    <blockquote className="mb-8 text-xs font-mono text-neutral-500 md:text-sm dark:text-neutral-200 mt-2">
                        As a Full Stack Developer Intern, I independently built a complete MERN stack application, managing both frontend and backend. I implemented API routing with Express.js, applied the full software development life cycle from HLD to LLD, and used React Hooks to handle complex component state logic.
                    </blockquote>
                </nav>   

                <nav className="my-5"> 
                    <h3 className="text-[#f4f4f4] text-[1.8rem] font-[600]">Front End Developer</h3>  
                    <p className="text-purple-400">April 2023 - May 2024</p>
                    <p className="text-purple-400">Entro Labs IT Solution Private Ltd</p>
                    <blockquote className="mb-8 text-sm font-mono text-neutral-500 md:text-sm dark:text-neutral-200 mt-2">
                       Worked as a Frontend Developer on a pharmaceutical application aimed at streamlining operations and enhancing digital access to medical and product data. The platform was built using React, Next.js, and React Bootstrap, enabling a responsive, user-friendly interface across devices.The role involved close collaboration with cross-functional teams, following Agile methodologies, participating in daily stand-ups, and maintaining clean version control using Git. This experience helped me develop a strong foundation in scalable frontend architecture and real-world product development in the healthcare industry.
                    </blockquote>
                </nav>
                <nav className="my-5"> 
                    <h3 className="text-[#f4f4f4] text-[1.8rem] font-[600]">Freelance Web Developer</h3>  
                    <p className="text-purple-400">October 2022 - March 2023</p>
                    <blockquote className="mb-8 text-xs font-mono text-neutral-500 md:text-sm dark:text-neutral-200 mt-2">
                        As a freelance Web Developer, I worked on building static websites and implementing UI enhancements for existing projects using technologies like React.js, HTML, and CSS. This included creating responsive layouts, refining component structures, and ensuring cross-browser compatibility to improve overall user experience.
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
                    <p>JNTU-Kakinda</p>
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





