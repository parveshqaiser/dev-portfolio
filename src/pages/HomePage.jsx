

import React from 'react'
import { BackgroundLines } from '../components/ui/background-lines';
import { ContainerTextFlip } from '../components/ui/container-text-flip';

const HomePage = () => {
    return (
        <main className='flex justify-center items-center h-screen bg-[#000000]' id='home'>
            <div>
                 <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-indigo-400 to-violet-500 text-xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
                        Hey There <span>👋</span>
                    </h2>
                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-2xl md:text-4xl lg:text-7xl font-sans pb-2 md:pb-10 relative z-20 font-bold tracking-tight">
                        I'm Parvesh Qaiser
                    </h2>
                   
                    <div className="max-w-3xl mx-auto text-sm md:text-base lg:text-lg text-center">
                        <ContainerTextFlip
      			            words={["Full Stack Developer", "Front End Developer", "Back End Developer"]}
                            className="text-gray-500"
    		            />
                    </div>
                    </BackgroundLines>
            </div>
        </main>
    )
}

export default HomePage;
