import React from "react"
import SideSpacerColumn from "../components/SideSpacerColumn"
import resume from "../assets/resumeSS.JPG"
import resumeDownload from "../assets/GabrielleFulkResume.pdf"

const ResumePage = () => {
    return (
        <div className="flex flex-row flex-wrap m-auto pb-10">
            <SideSpacerColumn/>
            <div className="page-heading">
                Resume
            </div>
            <div className="flex flex-row justify-center m-auto pl-4 sm:pl-0 pr-3">
                <div className="flex flex-col items-center space-y-3 pt-7 pl-10 sm:pl-0">
                    <img className="rounded-lg shadow-md border-8 border-xanadu" src={resume} alt="Screenshot of resume"/>
                    <a href={resumeDownload} download="GabrielleFulkResume">
                        <button className="button">DOWNLOAD</button>
                    </a>
                </div>
            </div>
            <SideSpacerColumn/>
        </div>
    )
}

export default ResumePage