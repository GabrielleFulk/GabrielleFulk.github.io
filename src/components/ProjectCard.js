import React from "react"

const ProjectCard = ({image, name, description, btnName, btnLink}) => {
    return (
        <div className="flex flex-col flex-auto w-64 space-y-4 p-7 text-title">
            <img className="max-h-72 self-center rounded-xl border-8 border-xanadu shadow-md" src={image} alt=""/>
            <div className="text-lg font-bold">
                {name}
            </div>
            <div>
                {description}
            </div>
            <button className= "bg-xanadu text-white py-1 px-2 rounded-md border-0 shadow-md tracking-tighter text-sm font-bold self-center" href={btnLink}>
                {btnName} 
            </button>
        </div>
    )
}

export default ProjectCard