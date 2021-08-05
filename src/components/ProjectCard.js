import React from "react"

const ProjectCard = ({image, name, description, btnName, btnLink}) => {
    return (
        <div className="flex flex-col h-min w-60 space-y-4 text-title pr-8 mb-8">
            <img className="rounded-xl border-8 border-water shadow-md" src={image} alt=""/>
            <div className="text-lg font-bold">
                {name}
            </div>
            <div className="">
                {description}
            </div>
            <button className= "bg-water py-1 px-2 rounded-md border-0 shadow-md tracking-tighter text-sm font-bold" href={btnLink}>
                {btnName} 
            </button>
        </div>
    )
}

export default ProjectCard