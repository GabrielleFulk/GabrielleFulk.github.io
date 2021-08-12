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
        <div className="flex flex-col py-24">
            <SideSpacerColumn/>
            <div className="page-heading text-left pl-14 sm:pl-28">
                About Me
            </div>
            <div className="flex flex-row flex-wrap m-auto w-full pl-14 sm:pl-72 pr-3 sm:pr-28 sm:-mt-5">
                <div className="flex flex-col py-5">
                    <img className= "self-center rounded-lg" src={headshot} alt="Headshot"/>
                </div>
                <SpacerColumn/>
                <div className="flex flex-col flex-auto w-96 space-y-7 py-5">
                    <div style={{listStyle: 'none'}}>
                        <li className="pb-1"> <LaptopChromebookOutlinedIcon/> Computer science major and economics minor</li>
                        <li className="pb-1"> <SchoolOutlinedIcon/> Trinity University class of 2023</li>
                        <li className="pb-1"> <FilterHdrOutlinedIcon/> Arizona native</li>
                        <li className="pb-1"> <PoolOutlinedIcon/> College diver</li>
                        <li className="pb-1"> <LocalLibraryOutlinedIcon/> Book lover</li>
                        <li className="pb-1"> <LocalFloristOutlinedIcon/> Plant enthusiest</li>
                        <li> <LocalCafeOutlinedIcon/>Coffeeshop connoisseur</li>
                    </div>
                    <div>
                        I have always loved puzzles, logic questions, and strategy games. When I discovered computer science it seemed like all the things I’ve 
                        enjoyed and excelled at came together. I love the problem solving of computer science that keeps it constantly interesting 
                        and challenging. The ability to be creative within such a logical field allows me to combine all aspects of my interests. This love of logic, 
                        problem solving, and creativity led me to software development and all things data related. 
                        <br/><br/>
                        Aside from computer science I enjoy finding new coffee shops, working on any sort of craft project, reading, and diving. I’m passionate 
                        about supporting women in technology, sustainability and climate change, and health/fitness.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage