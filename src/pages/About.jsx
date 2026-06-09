import React from 'react';
import { Cover } from '../components/ui/cover';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/moving-border';
import { motion } from 'framer-motion';


const About = () => {
    return (
    <main className="relative min-h-screen w-full overflow-hidden px-4 sm:px-8" id="about">
        <div
            className={cn(
            'absolute inset-0',
            '[background-size:40px_40px]',
            '[background-image:linear-gradient(to_right,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_1px,transparent_1px)]',
            'dark:[background-image:linear-gradient(to_right,rgba(100,100,100,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,100,100,0.3)_1px,transparent_1px)]'
            )}
        />

        {/* Radial mask */}
        <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

            <motion.div
                className="relative z-20 flex flex-col"
                // initial={{ opacity: 0, x: -500 }}
                // animate={{ opacity: 1, x: 0 }}
                // transition={{ duration: 2, ease: 'easeOut' }}
                initial={{ opacity: 0, x: "-50vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration:2, ease: 'easeOut' }}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    <Cover>About Me</Cover>
                </h1>

                <article className='my-2 max-w-6xl mx-auto space-y-5 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent px-2 sm:px-4'>
                    <p className="lg:text-[20px] md:text-[18px] text-base">
                       Full Stack Developer with a strong focus on Backend development, experienced in building scalable REST APIs, authentication systems, and transaction-based applications using Node.js, Express.js, MongoDB, PostgreSQL, and React. 
                    </p>

                    <p className='lg:text-[20px] md:text-[18px] text-base'>
                       Throughout my career, I have been involved in designing and developing robust backend services, creating efficient database structures, and building secure, high-performance APIs. My experience includes working with MongoDB and PostgreSQL for data management, implementing RESTful services, optimizing application performance, and collaborating with cross-functional teams to deliver reliable software solutions.
                    </p>

                    <p className='lg:text-[20px] md:text-[18px] text-base'>
                        In addition to backend development, my experience with React.js & Redux has enabled me to understand end-to-end application architecture and effectively collaborate with frontend teams. I am passionate about writing clean, maintainable code and continuously improving system performance and user experience.
                    </p>

                    <p className='lg:text-[20px] md:text-[18px] text-base'>
                        Beyond Development,I enjoy collaborating with teams, contributing to open-source projects, and continuously learning modern technologies including AI-driven applications and backend architectures. 
                    </p>
                </article>
                
            </motion.div>

            <motion.div
                className="flex justify-center my-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <Button className="cursor-pointer text-violet-500 text-sm sm:text-base">
                    Resume
                </Button>
            </motion.div>
    </main>
    );
};

export default About;