import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/index'

export class MainRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={ Home }/>
        </Switch>
      </HashRouter>
    )
  }
}
