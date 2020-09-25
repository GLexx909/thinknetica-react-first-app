import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Index from "./components/pages/Main";
import NotFound from './components/pages/NotFound'
import BookCard from "./components/pages/Book/components/BookCard";
import WishListPage from "./components/pages/WishListPage/WishListPage";
import {bookPath} from "./helpers/routes";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Index} path='/' exact />
          <Route component={BookCard} path={bookPath()} strict exact />
          <Route component={WishListPage} path='/wishlist' strict exact />
          <Route render={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
