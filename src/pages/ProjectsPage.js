import React from "react"
import SideSpacerColumn from "../components/SideSpacerColumn"
import SpacerColumn from "../components/SpacerColumn"
import ProjectCard from "../components/ProjectCard"
import websiteSS from "../assets/websiteSS.JPG"
import Survey1 from "../assets/Survey1.jpg"

const websiteDesc = ("This website is my first publicly displayed front-end project. I built it using ReactJS and Tailwind. As my portfolio grows and my creative vision evolves I plan to continue to update it.")
const bigSunDesc = ("Summer 2021 I designed and developed a NPS pop-up survey for the customer portal, an automated annual NPS text survey, a dashboard summarizing the data, and implemented email change verification")

const ProjectsPage = () => {
    return (
        <div className="flex flex-row flex-wrap m-auto pb-32">
            <SideSpacerColumn/>
            <div className="page-heading">
                Projects
            </div>
            <SpacerColumn/>
            <div className="flex flex-row flex-wrap flex-auto m-auto justify-center px-3">
                <ProjectCard image={websiteSS} name="gabriellefulk.dev" description={websiteDesc} btnName="GITHUB" btnLink="https://github.com/GabrielleFulk/GabrielleFulk.github.io"/>
                <ProjectCard image={Survey1} name="Big Sun Internship" description={bigSunDesc} btnName="READ MORE" btnLink="/big-sun-solar-internship"/>
            </div>
            <SideSpacerColumn/>
        </div>
    )
}

export default ProjectsPage