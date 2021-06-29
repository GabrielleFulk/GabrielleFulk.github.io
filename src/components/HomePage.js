import React from "react"
import headshot from "../assets/headshot.jpg"

const HomePage = () => {
    return (
        <div class="flex flex-row ">
            <div class="flex flex-col w-1/2 pb-32 px-32 pt-10">
                <img class="object-cover rounded-md" src={headshot} alt="Headshot"/>
            </div>
            <div class="flex flex-col w-1/2 pl-10 m-8 space-y-8">
                <h1 class="text-center">Gabrielle<br/>Fulk</h1>
                <div>
                    <li>Computer science major and economics minor</li>
                    <li>Trinity University class of 2023</li>
                    <li>Arizona native</li>
                    <li>College diver</li>
                    <li>Book lover</li>
                    <li>Plant enthusiest</li>
                    <li>Coffeeshop connoisseur</li>
                </div>
            </div>
        </div>
    )
}

export default HomePage