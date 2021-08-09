import React from "react"
import SideSpacerColumn from "../components/SideSpacerColumn"
import websiteSS from "../assets/websiteSS.jpg"
import Survey1 from "../assets/Survey1.JPG"
import SpacerColumn from "../components/SpacerColumn"
import ProjectCard from "../components/ProjectCard"

const websiteDesc = ("This website is my first publicly displayed front-end project. I built it using ReactJS and Tailwind. As my portfolio grows and my creative vision evolves I plan to continue to update it.")
const BigSunDesc = ("Summer 2021 I designed and developed a NPS pop-up survey for the customer portal as well as a dashboard that summarized collected data in table and graph form.")

const ProjectsPage = () => {
    return (
        <div className="flex flex-row flex-wrap m-auto pb-32">
            <SideSpacerColumn/>
            <div className="flex flex-col">
                <div className="page-heading pl-10">
                    Projects
                </div>
            </div>
            <SpacerColumn/>
            <div className="flex flex-row flex-wrap flex-auto m-auto justify-center pl-3 pr-3">
                <ProjectCard image={websiteSS} name="gabriellefulk.dev" description={websiteDesc} btnName="GITHUB" btnLink="https://github.com/GabrielleFulk/GabrielleFulk.github.io"/>
                <ProjectCard image={Survey1} name="Big Sun Internship" description={BigSunDesc} btnName="READ MORE" btnLink=""/>
            </div>
            <SideSpacerColumn/>
        </div>
    )
}

export default ProjectsPage