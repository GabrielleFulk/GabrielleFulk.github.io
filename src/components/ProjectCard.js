import React from "react"

const ProjectCard = (image, description, btnName, btnLink) => {
    return (
        <div className="flex flex-col h-min w-64 space-y-4">
            <img className="rounded-xl border-8 border-water shadow-md" src={image} alt=""/>
        <div className="">
            {description}
        </div>
        <button className= "bg-water w-20 h-7  rounded-md border-0 shadow-md" href={btnLink}>
            {btnName}
        </button>
    </div>
    )
}

export default ProjectCard