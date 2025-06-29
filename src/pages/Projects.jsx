


"use client";

import { Github, ExternalLink, MoveRightIcon } from "lucide-react";
import job from "../assets/job.png";
import store from "../assets/store.png";
import tinder from "../assets/weather.png";
import { Cover } from '../components/ui/cover';
import { Button } from '@/components/ui/moving-border';

const projects = [
	{
		id: 1,
		title: "Book Store (E-commerce)",
		description: "A full-featured online bookstore with cart, payments, and user management",
		image: store,
		techStack: ["React", "Node.js", "MongoDB", "Stripe"],
		githubUrl: "https://github.com/yourusername/bookstore",
		liveUrl: "https://bookstore-demo.vercel.app",
	},
	{
		id: 2,
		title: "Dev Tinder",
		description: "Connect with fellow developers, send requests, and build your network",
		image: tinder,
		techStack: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
		githubUrl: "https://github.com/yourusername/dev-tinder",
		liveUrl: "https://dev-tinder-demo.vercel.app",
	},
	{
		id: 3,
		title: "Job Portal",
		description: "Modern job board platform for connecting employers with talent",
		image: job,
		techStack: ["React", "Express", "MySQL", "JWT"],
		githubUrl: "https://github.com/yourusername/job-portal",
		liveUrl: "https://job-portal-demo.vercel.app",
	},
];


const Projects =()=> {
	return (
	<main className="min-h-screen bg-gradient-to-r from-black/100 via-black/95 to-black/90" id="projects">
 		<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
			<Cover> Recent Work</Cover>
		</h1>

		<section className="grid max-w-[1160px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 my-10">
		{projects.map((val, index)=>(
			<div
            	key={val.id}
            	className="relative  m-2 overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-black/80 shadow-2xl shadow-gray-900/50 hover:shadow-xl hover:shadow-black transition-all duration-500 transform hover:-translate-y-2"
          	>
				<header className="overflow-hidden m-2">
					<img
						src={val.image}
						alt={val.title}
						className="w-full h-48 object-contain transition-transform duration-700 hover:scale-105"
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
						<a
							href={val.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors duration-300"
						>
							<Github className="h-4 w-4" /> Code
						</a>
						<a
							href={val.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
						>
							<ExternalLink className="h-4 w-4" /> Live Demo
						</a>
					</nav>
				</article>
			</div>
		))}
		</section>

		 <div className="flex justify-center py-10">
			<Button className="cursor-pointer text-violet-500 text-sm sm:text-base">
				MORE &nbsp; <MoveRightIcon className="flex items-center"/>
			</Button>
		</div>
	</main>
	);
}

export default Projects;
