import React from "react"
import SpacerColumn from "../components/SpacerColumn"
import websiteSS from "../assets/websiteSS.jpg"
import ProjectCard from "../components/ProjectCard"

const websiteDesc = ("This website is my first publicly displayed front-end project. I built it using ReactJS and Tailwind. As my portfolio grows and my creative vision evolves I plan to continue to update it.")

const ProjectsPage = () => {
    return (
        <div className="flex flex-row pb-32">
            <SpacerColumn/>
            <div className="page-heading w-24">
                Projects
            </div>
            <SpacerColumn/>
            <div className="flex flex-row">
                <ProjectCard image={websiteSS} name="gabriellefulk.dev" description={websiteDesc} btnName="GITHUB" btnLink="https://github.com/GabrielleFulk/GabrielleFulk.github.io"/>
                <ProjectCard image={websiteSS} name="gabriellefulk.dev" description={websiteDesc} btnName="GITHUB" btnLink="https://github.com/GabrielleFulk/GabrielleFulk.github.io"/>
            </div>
            <SpacerColumn/>
        </div>
    )
}

export default ProjectsPage