import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconHome,
    IconMail,
} from "@tabler/icons-react";
import { CodeXml, GraduationCapIcon, PersonStanding, Settings2Icon } from "lucide-react";

const Navbar =()=> {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#home",
        },
        {
            title: "About",
            icon: (
                <PersonStanding className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#about",
        },
         {
            title: "Skills",
            icon: (
                <CodeXml className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#skills",
        },
        {
            title: "Projects",
            icon: (
                <Settings2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },       
        {
            title: "Experience & Education",
            icon: (
                <GraduationCapIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#experience",
        },
        // {
        //     title: "GitHub",
        //     icon: (
        //         <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        //     ),
        //     href: "#",
        // },
        {
            title: "Contact",
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#contact",
        },
    ];

    return (
        <div className="fixed md:left-[35%] left-10 bottom-[30px] z-101">
            <FloatingDock
                items={links} 
            />
        </div>
    );
}

export default Navbar;


