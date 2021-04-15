import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavbarTop from './components/NavbarTop'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <NavbarTop />
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
