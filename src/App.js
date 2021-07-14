import React from "react"
import AboutPage from "./pages/AboutPage"
import TitlePage from "./pages/TitlePage"
import SideBar from "./components/SideBar"
import ProjectsPage from "./pages/ProjectsPage"
import ResumePage from "./pages/ResumePage"

function App() {
  return (
    <>
      <SideBar/>
      <TitlePage/>
      <AboutPage/>
      <ProjectsPage/>
      <ResumePage/>
    </>
  )
}

export default App;
