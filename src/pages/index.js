import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom"

import Main from './Main'
import BigSunPage from './BigSunPage'

const Webpages = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/big-sun-solar-internship' component = {BigSunPage} />
      </Switch>
    </Router>
  )
}

export default Webpages
