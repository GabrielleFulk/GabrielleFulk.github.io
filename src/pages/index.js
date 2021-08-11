import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"

import Main from './Main'
import BigSunPage from './BigSunPage'

const Webpages = () => {
  return (
    <Router basename="/gabriellefulk.github.io">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path = "/big-sun-solar-internship" component = {BigSunPage} />
      </Switch>
    </Router>
  )
}

export default Webpages
