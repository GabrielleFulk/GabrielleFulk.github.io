import React from "react"
import SpacerColumn from "../components/SpacerColumn"
import SideSpacerColumn from "../components/SideSpacerColumn"
import headshot from "../assets/headshot.jpg"
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined'
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined'
import LocalFloristOutlinedIcon from '@material-ui/icons/LocalFloristOutlined'
import FilterHdrOutlinedIcon from '@material-ui/icons/FilterHdrOutlined'
import LaptopChromebookOutlinedIcon from '@material-ui/icons/LaptopChromebookOutlined'
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined'
import PoolOutlinedIcon from '@material-ui/icons/PoolOutlined'

const AboutPage = () => {
    return (
        <div className="flex flex-row flex-wrap py-32">
            <SideSpacerColumn/>
            <div className="page-heading pl-10">
                About Me
            </div>
            <div className="flex flex-row flex-wrap m-auto pl-10 pr-3">
                <div className="flex flex-col py-5">
                    <img className= "self-center rounded-lg" src={headshot} alt="Headshot"/>
                </div>
                <SpacerColumn/>
                <div className="flex flex-col flex-auto w-96 space-y-7 py-5">
                    <div style={{listStyle: 'none'}}>
                        <li> <LaptopChromebookOutlinedIcon/> Computer science major and economics minor</li>
                        <li> <SchoolOutlinedIcon/> Trinity University class of 2023</li>
                        <li> <FilterHdrOutlinedIcon/> Arizona native</li>
                        <li> <PoolOutlinedIcon/> College diver</li>
                        <li> <LocalLibraryOutlinedIcon/> Book lover</li>
                        <li> <LocalFloristOutlinedIcon/> Plant enthusiest</li>
                        <li> <LocalCafeOutlinedIcon/>Coffeeshop connoisseur</li>
                    </div>
                    <div>
                        I have always loved puzzles, logic questions, and strategy games. When I discovered computer science it seemed like all the things I’ve 
                        found enjoyment in and been good at came together. I love the problem solving of computer science that keeps it constantly interesting 
                        and challenging. The ability to be creative within such a logical field allows all aspects of my interests to join. This love of logic, 
                        problem solving, and creativity has led me to be interested in software development as well as all things data related. 
                        <br/><br/>
                        Aside from computer science I enjoy finding new coffee shops, working on any sort of craft project, reading, and diving! I’m passionate 
                        about supporting women in technology, sustainability and climate change, and health/fitness.
                    </div>
                </div>
            </div>
            <SideSpacerColumn/>
        </div>
    )
}

export default AboutPage