import React from "react"
import SideSpacerColumn from "../components/SideSpacerColumn"
import resume from "../assets/resume.JPG"
import resumeDownload from "../assets/GabrielleFulkResume.pdf"

const ResumePage = () => {
    return (
        <div className="flex flex-row flex-wrap m-auto pb-10">
            <SideSpacerColumn/>
            <div className="flex flex-col">
                <div className="page-heading pl-10">
                    Resume
                </div>
            </div>
            <div className="flex flex-row justify-center m-auto pr-3">
                <div className="flex flex-col w-14 sm:w-0"/>
                <div className="flex flex-col items-center space-y-3 pt-7">
                    <img className="h-full w-full rounded-lg border-8 border-xanadu shadow-md" src={resume} alt=""/>
                    <a href={resumeDownload} download="GabrielleFulkResume">
                        <button className= "bg-xanadu text-white py-1 px-2 rounded-md border-0 shadow-md tracking-tighter text-sm font-bold">DOWNLOAD</button>
                    </a>
                </div>
            </div>
            <SideSpacerColumn/>
        </div>
    )
}

export default ResumePage