import React from "react"
import SpacerColumn from "../components/SpacerColumn"
import websiteSS from "../assets/websiteSS.jpg"

const websiteDesc = ("This website is my first publicly displayed front-end project. I built it using ReactJS and Tailwind. As my portfolio grows and my creative vision evolves I plan to continue to update it.")

const ProjectsPage = () => {
    return (
        <div className="flex flex-row flex-wrap m-auto pb-32">
            <SpacerColumn/>
            <div className="flex flex-col">
                <div className="page-heading w-24 pb-8">
                    Projects
                </div>
            </div>
            <SpacerColumn/>                
            <div className="flex flex-col flex-1 h-min w-52 space-y-4 text-title px-7">
                <img className="max-h-72 self-center rounded-xl border-8 border-water shadow-md" src={websiteSS} alt=""/>
                <div className="text-lg font-bold">
                    gabriellefulk.dev
                </div>
                <div className="">
                    {websiteDesc}
                </div>
                <button className= "bg-water py-1 px-2 w-20 h-6 rounded-md border-0 shadow-md tracking-tighter text-sm font-bold self-center" href="https://github.com/GabrielleFulk/GabrielleFulk.github.io">
                    GITHUB 
                </button>
            </div>
            <div className="flex flex-col flex-1 h-min w-52 space-y-4 text-title px-7">
                <img className="max-h-72 self-center rounded-xl border-8 border-water shadow-md" src={websiteSS} alt=""/>
                <div className="text-lg font-bold">
                    gabriellefulk.dev
                </div>
                <div className="">
                    {websiteDesc}
                </div>
                <button className= "bg-water py-1 px-2 w-20 h-6 rounded-md border-0 shadow-md tracking-tighter text-sm font-bold self-center" href="https://github.com/GabrielleFulk/GabrielleFulk.github.io">
                    GITHUB 
                </button>
            </div>
            <SpacerColumn/>
        </div>
    )
}

export default ProjectsPage