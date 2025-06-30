


"use client";

import { Github, ExternalLink, MoveRightIcon } from "lucide-react";
import job from "../../public/job.png";
import store from "../../public/store.png";
import tinder from "../../public/dating.svg";

// import one from "../../public/gif/one.gif";
// import two from "../../public/gif/two.gif";
// import three from "../../public/gif/three.gif";

import { Cover } from '../components/ui/cover';
import { Button } from '@/components/ui/moving-border';
import { useEffect, useState } from "react";

const projects = [
	{
		id: 1,
		title: "Book Store (E-commerce)",
		description: "A full-featured online bookstore with MFA ,session, cart, payments, and user management",
		image: store,
		techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
		githubUrl: "https://github.com/parveshqaiser/bookstore-frontend",
		liveUrl: "http://13.48.59.101/",
	},
	{
		id: 2,
		title: "Dev Tinder",
		description: "Connect with fellow developers, send requests, and build your network",
		image: tinder,
		techStack: ["React", "Socket.io", "Node.js", "Tailwind"],
		githubUrl: "https://github.com/parveshqaiser/dev-tinder-frontend",
		liveUrl: "",
	},
	{
		id: 3,
		title: "Job Portal",
		description: "Modern job board platform for connecting employers with talent",
		image: job,
		techStack: ["React", "Express", "MongoBB", "JWT"],
		githubUrl: "https://github.com/parveshqaiser/mern-job-portal",
		liveUrl: "https://mern-job-portal-frontend-yk9i.onrender.com/",
	},
];


const Projects =()=> {

	// const [currentGifIndex, setCurrentGifIndex] = useState(0);

	// useEffect(()=>{
	// 	const interval = setInterval(() => {
	// 		setCurrentGifIndex(prev => (prev + 1) % projects[0].image.length); // only one project
	// 	}, 1500);

  	// 	return () => clearInterval(interval); // cleanup
	// },[])


	return (
	<main className="min-h-screen bg-gradient-to-r from-black/100 via-black/95 to-black/90" id="projects">
 		<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
			<Cover> Recent Work</Cover>
		</h1>

		<section className="grid max-w-[1160px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 my-10">
		{projects.map((val, index)=>(
			<div
            	key={val.id}
            	className="relative  m-2 overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-black/80 shadow-2xl shadow-gray-900/50 hover:shadow-xl hover:shadow-black transition-all duration-500 transform hover:-translate-y-6"
          	>
				<header className="overflow-hidden m-2">
					<img
						loading="lazy"
						src={val.image}
						alt={val.title}
						className="w-full h-48 rounded-lg object-contain transition-transform duration-700 hover:scale-105"
					/>
            	</header>
				
				<article className="p-6 flex flex-col justify-between h-[300px]">
					<nav>
						<h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
						<p className="text-gray-400 text-sm mb-4">{val.description}</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{val.techStack.map((tech, techIndex) => (
								<span
									key={techIndex}
									className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
								>
									{tech}
								</span>
							))}
						</div>
					</nav>
					<nav className="flex gap-3 mt-auto">
						{/* <a
							href={val.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors duration-300"
						>
							<Github className="h-4 w-4" /> Code
						</a> */}
						<a
							href={val.liveUrl}
							target="_blank"
							title="Live URL"
							rel="noopener noreferrer"
							className="flex rounded-md items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#4F2428] to-[#311A1C] hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
						>
							<ExternalLink className="h-4 w-4" /> 
						</a>
					</nav>
				</article>
			</div>
		))}
		</section>

		 <div className="flex justify-center py-10">
			<a  href="https://github.com/parveshqaiser" target="_blank" rel="noopener noreferrer">
				<Button className="cursor-pointer text-violet-500 text-sm sm:text-base">	
					MORE &nbsp; <MoveRightIcon className="flex items-center"/>
				</Button>
			</a>
			
		</div>
	</main>
	);
}

export default Projects;
