import React from "react"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

const SideBar = () => {
    return (
        <div className="flex flex-col fixed left-0 bottom-0 p-2 space-y-1">
            <a href="https://www.linkedin.com/in/gabrielle-fulk/"> <LinkedInIcon/> </a>
            <a href="https://github.com/GabrielleFulk"> <GitHubIcon/> </a>
            <a href="https://www.instagram.com/gabi.fulk/"> <InstagramIcon/> </a>
        </div>
    )
}

export default SideBar