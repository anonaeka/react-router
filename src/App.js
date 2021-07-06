import React, { useReducer } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Home from "./components/Home"
import CategorySelection from './components/CategorySelection'
import NewEntry from './components/NewEntry'
import NotFound from './components/NotFound'
import Nav from './components/Nav'
import stateReducer, { stateContext } from './stateReducer'

function App() {
  const [store, dispatch] = useReducer(stateReducer, {
    categories: ["food", "coding", "tv", "other"],
    entries: []
  })

  return (
    <stateContext.Provider value={{...store, dispatch}}>
      <h1>Journal</h1>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/entry/new/:category_id" component={NewEntry} />
          <Route exact path="/category" component={CategorySelection} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </stateContext.Provider>
  )
}

export default App
