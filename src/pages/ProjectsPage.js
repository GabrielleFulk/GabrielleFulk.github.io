import React from "react"
import websiteSS from "../assets/websiteSS.jpg"
import ProjectCard from "../components/ProjectCard"

const websiteDesc = ("This website is my first publicly displayed front-end project. I built it using ReactJS and Tailwind. As my portfolio grows and my creative vision evolves I plan to continue to update it.")

const ProjectsPage = () => {
    return (
        <div className="flex flex-row pb-32">
            {/* <div className="flex flex-col w-1/4"/> */}
            <div className="container w-36"/> 
            <div className="page-heading pr-10">
                Projects
            </div>
            <div className="flex flex-row">
                <ProjectCard image={websiteSS} name="gabriellefulk.dev" description={websiteDesc} btnName="GITHUB" btnLink="https://github.com/GabrielleFulk/GabrielleFulk.github.io"/>
                <ProjectCard image={websiteSS} name="gabriellefulk.dev" description={websiteDesc} btnName="GITHUB" btnLink="https://github.com/GabrielleFulk/GabrielleFulk.github.io"/>
            </div>
        </div>
    )
}

export default ProjectsPage