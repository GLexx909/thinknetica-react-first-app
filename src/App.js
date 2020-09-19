import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import NotFound from './components/NotFound'
import BookCard from "./components/BookCard";
import WishListPage from "./pages/WishListPage";
import {bookPath} from "./helpers/routes";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Main} path='/' exact />
          <Route component={BookCard} path={bookPath()} strict exact />
          <Route component={WishListPage} path='/wishlist' strict exact />
          <Route render={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
