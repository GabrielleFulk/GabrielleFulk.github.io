import React from "react"
import headshot from "../assets/headshot.jpg"

const AboutPage = () => {
    return (
        <div className="flex flex-row">
            <div className="container w-36"/> 
            <div className="page-heading">
                About<br/>Me
            </div>
            <div className="container mx-auto -mt-32 -mx-10">
                <img className="transform scale-50 rounded-xl" src={headshot} alt="Headshot"/>
            </div>
            <div className="container mx-auto pl-2 mt-16 space-y-8 text-title">
                <div>
                    <li>Computer science major and economics minor</li>
                    <li>Trinity University class of 2023</li>
                    <li>Arizona native</li>
                    <li>College diver</li>
                    <li>Book lover</li>
                    <li>Plant enthusiest</li>
                    <li>Coffeeshop connoisseur</li>
                </div>
                <div>
                    Some paragraph about myself will go here...
                </div>
            </div>
        </div>
    )
}

export default AboutPage