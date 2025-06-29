

import React from 'react'
import { Cover } from '../components/ui/cover';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/moving-border';

const About = () => {
    return (
        <main className="relative h-screen w-full  overflow-hidden px-4 sm:px-8" id="about">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,rgba(100,100,100,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,100,100,0.3)_1px,transparent_1px)]"
                )}
            />

                {/* Radial mask */}
                <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

                <div className="relative z-20 flex flex-col">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        <Cover>About Me</Cover>
                    </h1>

                    <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-4xl max-w-6xl text-justify mx-auto bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent px-2 sm:px-4">
                    MERN Stack Developer with around 2 years of hands-on experience in building scalable, high-performance
                    web applications using React.js, Node.js, MongoDB, and JavaScript. Strong grasp of DOM manipulation,
                    ECMAScript features, and Redux workflows. Familiar with modern front-end tools (Webpack, Babel, NPM), and
                    translating business logic into efficient technical solutions.
                    </p>
                </div>

                <div className="flex justify-center my-8">
                    <Button className="cursor-pointer text-violet-500 text-sm sm:text-base">
                        Resume
                    </Button>
                </div>
        </main>
    );
};

export default About;