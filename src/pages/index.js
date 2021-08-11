import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

import Main from './Main'
import BigSunPage from './BigSunPage'

const Webpages = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path = "/big-sun-solar-internship" component = {BigSunPage} />
    </Router>
  )
}

export default Webpages
