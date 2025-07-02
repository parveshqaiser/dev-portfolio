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
                        As a dedicated Full-Stack Web Developer, I specialize in creating robust, high-performance web solutions with a strong foundation in React, Next.js, Node.js, and MongoDB. My passion lies in building user-focused applications that balance solid API Development & Integration with thoughtful UI/UX Design & Prototyping, ensuring each product not only works well but feels intuitive and engaging.
                    </p>

                    <p className='lg:text-[20px] md:text-[18px] text-base'>
                        Over the years, I have strengthened my expertise in modern state management workflows like Redux and I enjoy crafting visually appealing interfaces using Tailwind CSS and Shadcn.I’m committed to performance optimization at every stage whether that’s securing RESTful APIs, streamlining data flow, or applying database indexing for efficient queries.
                    </p>

                    <p className='lg:text-[20px] md:text-[18px] text-base'>
                        Beyond development, I actively contribute to the open-source software community, where I mentor junior developers, lead technical workshops on React and help student communities grow their skill. I thrive in collaborative environments that value teamwork, clear communication, and continuous learning.
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
