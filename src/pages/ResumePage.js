import React from "react"
import resume from "../assets/resume.jpg"
import resumeDownload from "../assets/resumeDownload.pdf"

const ResumePage = () => {
    return (
        <div className="flex flex-row h-screen">
            <div className="container w-36"/> 
            <div className="flex flex-col">
                <div className="page-heading">
                    Resume
                </div>
            </div>
            <div className="flex flex-col align-center">
                <img className=" transform scale-75 -mt-24 rounded-xl border-8 border-water shadow-md" src={resume} alt=""/>
                <a href={resumeDownload} download="GabrielleFulk_Resume">
                    <button className= "bg-water w-28 h-7 rounded-md border-0 shadow-md">DOWNLOAD</button>
                </a>

            </div>
        </div>
    )
}

export default ResumePage