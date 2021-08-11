import React from "react"
import { Link } from "react-router-dom"
import SideSpacerColumn from "../components/SideSpacerColumn"
import SpacerColumn from "../components/SpacerColumn"
import ProjectCard from "../components/ProjectCard"
import websiteSS from "../assets/websiteSS.JPG"
import Survey1 from "../assets/Survey1.jpg"

const websiteDesc = ("This website is my first publicly displayed front-end project. I built it using ReactJS and Tailwind. As my portfolio grows and my creative vision evolves I plan to continue to update it.")
const bigSunDesc = ("Summer 2021 I designed and developed a NPS pop-up survey for the customer portal, an automated annual NPS text survey, a dashboard summarizing the data, and implemented email change verification.")

const ProjectsPage = () => {
    return (
        <div className="flex flex-row flex-wrap m-auto pb-24">
            <SideSpacerColumn/>
            <div className="page-heading">
                Projects
            </div>
            <SpacerColumn/>
            <div className="flex flex-row flex-wrap flex-auto m-auto justify-center pl-7 sm:pl-3 pr-3">
                <ProjectCard 
                    image={websiteSS} 
                    name="gabriellefulk.dev" 
                    description={websiteDesc} 
                    button={ <a className="button" href="https://github.com/GabrielleFulk/GabrielleFulk.github.io">GITHUB</a> } 
                />
                <ProjectCard 
                    image={Survey1}
                    name="Big Sun Internship" 
                    description={bigSunDesc} 
                    button={ <Link to="/big-sun-solar-internship" className="button">READ MORE</Link> }
                />
            </div>
            <SideSpacerColumn/>
        </div>
    )
}

export default ProjectsPage