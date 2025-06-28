

"use client";

import { Github, ExternalLink } from "lucide-react";
import job from "../assets/job.png";
import store from "../assets/store.png";
import tinder from "../assets/weather.png";

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


export default function ProjectsTest() {
  return (
    <section className="w-full flex justify-center bg-black py-16">
      <div className="grid max-w-6xl w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-900 to-black shadow-lg shadow-gray-900/50 hover:shadow-xl hover:shadow-black transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Project image */}
				<div className="overflow-hidden">
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
					/>
				</div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-[300px]">
				<div>
					<h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
					<p className="text-gray-400 text-sm mb-4">{project.description}</p>
					<div className="flex flex-wrap gap-2 mb-4">
					{project.techStack.map((tech, techIndex) => (
						<span
						key={techIndex}
						className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
						>
						{tech}
						</span>
					))}
					</div>
				</div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors duration-300"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
