import React from "react"

const TitlePage = () => {
    return (
        <>
        <div className="flex flex-col justify-center h-screen text-8xl font-medium text-title tracking-wide">
            <div className="flex flex-row justify-start">
            <div className="container w-36"/> 
                <div className="text-right">
                    Gabrielle<br/>Fulk
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="justify-center absolute bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
        </>
    )
}

export default TitlePage