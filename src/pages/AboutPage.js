import React from "react"
import headshot from "../assets/headshot.jpg"
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined'
import LocalFloristOutlinedIcon from '@material-ui/icons/LocalFloristOutlined'
import FilterHdrOutlinedIcon from '@material-ui/icons/FilterHdrOutlined'
import LaptopChromebookOutlinedIcon from '@material-ui/icons/LaptopChromebookOutlined'
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined'
import PoolOutlinedIcon from '@material-ui/icons/PoolOutlined'


const AboutPage = () => {
    return (
        <div className="flex flex-row py-32">
            <div className="flex flex-col w-36"/>
            <div className="page-heading w-24">
                About<br/>Me
            </div>
            <div className="flex flex-col w-36"/>
            <div className="flex flex-col">
                <img className="object-scale-down h-96 w-full rounded-lg" src={headshot} alt="Headshot"/>
            </div>
            <div className="flex flex-col w-36"/>
            <div className="flex flex-col space-y-11 text-title tracking-wide">
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
                    Some paragraph about myself will go here...
                </div>
            </div>
        </div>
    )
}

export default AboutPage