

"use client"
import recoil from "../assets/recoil.svg";
import jwt from "../assets/jsonwebtokens.svg";
import { Cover } from '../components/ui/cover';

    const categories = [
        {
            title: "Languages",
            skills: ["html5", "css3", "javascript", "c"],
        },
        {
            title: "Frontend",
            skills: ["react", "nextjs", "redux", "bootstrap", "tailwindcss", "recoil"],
        },
        {
            title: "Backend",
            skills: ["nodejs", "mongodb", "express", "graphql", "jwt"],
        },
        {
            title: "Others",
            skills: ["git", "github", "socketio", "firebase", "postman", "reactrouter"],
        },
    ];


const Skills =()=>{
//  <section className="border border-b-green-800 min-h-screen px-4  mx-auto bg-gradient-to-l from-black/80 via-black/85 to-black/95 text-white" id="skills"></section>
    return (
    <section className="min-h-screen px-4 text-white" id="skills">
        <main className="max-w-6xl mx-auto">
            <nav className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    <Cover>Tech Stack</Cover>
                </h1>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    A comprehensive overview of my technical expertise across Frontend and Backend Technologies.
                </p>
		    </nav>

            <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                <div key={category.title} className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                    {category.skills.map((skill) => (
                        <div key={skill} className="relative group">        
                            <img
                            src={
                                    skill == "graphql"
                                    ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
                                    : skill == "recoil" ? recoil 
                                    : skill =="jwt" ? jwt 
                                    :`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`
                                }
                                alt={skill}
                                className="w-14 h-14 transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-xs opacity-0 group-hover:opacity-100 mt-2 bg-gray-800 px-2 py-1 rounded">
                                {skill.charAt(0).toUpperCase() + skill.slice(1)}
                            </span>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </nav>
        </main>
       
    </section>
  )

};

export default Skills;
