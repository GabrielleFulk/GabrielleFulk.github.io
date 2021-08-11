import React from "react"

const ProjectCard = ({image, name, description, btnName, btnLink}) => {
    return (
        <div className="flex flex-col flex-auto w-64 space-y-4 p-7">
            <img className="max-h-72 self-center rounded-xl shadow-md border-8 border-xanadu" src={image} alt=""/>
            <div className="text-lg text-title font-bold">
                {name}
            </div>
            <div>
                {description}
            </div>
            <a className="button" href={btnLink}>
                {btnName} 
            </a>
        </div>
    )
}

export default ProjectCard