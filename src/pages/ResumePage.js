import React from "react"
import SpacerColumn from "../components/SpacerColumn"
import resume from "../assets/resume.jpg"
import resumeDownload from "../assets/resumeDownload.pdf"

const ResumePage = () => {
    return (
        <div className="flex flex-row flex-wrap pb-10">
            <SpacerColumn/>
            <div className="flex flex-col">
                <div className="page-heading w-24 pb-8">
                    Resume
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <SpacerColumn/>
                <div className="flex flex-col items-center">
                    {/* <img className="transform scale-75 -mt-24 -mb-20 rounded-xl border-8 border-water shadow-md" src={resume} alt=""/> */}
                    <img className="object-scale-down h-full w-96 rounded-lg border-8 border-water shadow-md" src={resume} alt=""/>
                    <a href={resumeDownload} download="GabrielleFulkResume">
                        <button className= "bg-water py-1 px-2 rounded-md border-0 shadow-md tracking-tighter text-sm font-bold">DOWNLOAD</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ResumePage