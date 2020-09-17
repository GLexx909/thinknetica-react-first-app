import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import NotFound from './components/NotFound'
import BookCard from "./BookCard";
import WishlistProvider from "./Providers/WishlistProvider";
import WishListPage from "./pages/WishListPage";
import {bookPath} from "./helpers/routes";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Main} path='/' exact />
          <Route component={WishlistProvider(BookCard)} path={bookPath()} strict exact />
          <Route component={WishlistProvider(WishListPage)} path='/wishlist' strict exact />
          <Route render={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
