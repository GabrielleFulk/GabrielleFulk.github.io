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
    <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
        <Route path={process.env.PUBLIC_URL + '/big-sun-solar-internship'} component = {BigSunPage} />
      </Switch>
    </Router>
  )
}

export default Webpages
