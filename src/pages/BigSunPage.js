import React from "react"
import Survey2 from "../assets/Survey2-cropped.jpg"
import AdminDisplay1 from "../assets/AdminDisplay1.JPG"
import AdminDisplay2 from "../assets/AdminDisplay2.JPG"
import AdminDisplay3 from "../assets/AdminDisplay3.JPG"
import NPSText from "../assets/NPSText.jpeg"
import Email from "../assets/EmailVerification-cropped.png"
import SideSpacerColumn from "../components/SideSpacerColumn"

const BigSunPage = () => {
    return (
        <div className="flex flex-row m-auto">
            <SideSpacerColumn/>
            <div className="flex flex-col w-full">
                <div className="flex flex-row flex-wrap pt-7">
                    <div className="page-heading pl-2 sm:pl-10">
                        Big Sun Solar Internship Projects
                    </div>
                    <div className="pl-4 pt-2">
                        <a className= "bg-xanadu text-white py-1 px-2 rounded-md border-0 shadow-md tracking-tighter text-sm font-bold self-center" href="/">
                            Home 
                        </a>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap flex-auto px-3">
                    <div className="flex flex-col flex-auto w-96 max-w-lg space-y-4 p-7">
                        <div className="text-lg text-title font-bold">
                            User Email Verification
                        </div>
                        <p>
                            Developed and implemented email verification on the customer portal to allow users to change the email associated with their account.
                            When a user changes their email in settings they are sent a unique confirmation link which redirects the user to the sign-in page
                            and finalizes the email change. 
                            (Back end project w/ some front end integration)
                        </p>
                        <p className="font-semibold">
                            Skills: Ruby on Rails, React (JavaScript), Postman (for testing API calls)
                        </p>
                        <img className="w-full self-center rounded-md shadow-md" src={Email} alt=""/>
                    </div>
                    <div className="flex flex-col flex-auto w-96 max-w-lg space-y-4 p-7">
                        <div className="text-lg text-title font-bold">
                            NPS Text Survey
                        </div>
                        <p>
                            Automated an annual NPS (Net Promoter Score) survey text message to customers who hadn't logged on to take the portal survey. 
                            (Back end project)
                        </p>
                        <p className="font-semibold">
                            Skills: Ruby on Rails, Twilio
                        </p>
                        <img className="w-full self-center rounded-md shadow-md" src={NPSText} alt=""/>
                    </div>
                    <div className="flex flex-col flex-auto w-96 max-w-lg space-y-4 p-7">
                        <div className="text-lg text-title font-bold">
                            NPS Pop-up Survey
                        </div>
                        <p>
                            Designed and developed a NPS pop-up survey for the customer portal as well as a dashboard that summarized collected data in table and graph form. 
                            (Full stack project)
                        </p>
                        <p className="font-semibold">
                            Skills: React (JavaScript), Ruby on Rails
                        </p>
                        <img className="w-full self-center rounded-md shadow-md" src={Survey2} alt=""/>
                        <img className="w-full self-center rounded-md shadow-md" src={AdminDisplay1} alt=""/>
                        <img className="w-full self-center rounded-md shadow-md" src={AdminDisplay2} alt=""/>
                        <img className="w-full self-center rounded-md shadow-md" src={AdminDisplay3} alt=""/>
                    </div>
                </div>
            </div>
            <SideSpacerColumn/>
        </div>
    )
}

export default BigSunPage