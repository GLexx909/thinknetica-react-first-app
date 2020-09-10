import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import NotFound from './components/NotFound'
import BookCard from "./BookCard";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Main} path='/' exact />
          <Route component={BookCard} path='/books/:id' strict exact />
          <Route render={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
