import React from "react"

const ProjectCard = ({image, name, description, btnName, btnLink}) => {
    return (
        <div className="flex flex-col h-min w-64 space-y-4 text-title px-3">
            <img className="rounded-xl border-8 border-water shadow-md" src={image} alt=""/>
            <div className="text-lg font-bold">
                {name}
            </div>
            <div className="">
                {description}
            </div>
            <button className= "bg-water w-20 h-7 rounded-md border-0 shadow-md" href={btnLink}>
                {<span className="text-bold font-sm">{btnName}</span>} 
                {/* this span isn't doing anything... */}
            </button>
        </div>
    )
}

export default ProjectCard