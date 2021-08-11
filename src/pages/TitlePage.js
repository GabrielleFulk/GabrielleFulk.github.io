import React from "react"
import { ChevronDownIcon } from '@heroicons/react/outline'

const TitlePage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-8xl sm:text-9xl font-medium text-right tracking-wide">
            Gabrielle<br/>Fulk
            <ChevronDownIcon className="h-7 w-7 justify-center absolute bottom-0 animate-bounce"/>
        </div>
    )
}

export default TitlePage