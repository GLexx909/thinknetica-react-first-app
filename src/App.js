import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./components/pages/Main";
import NotFound from './components/pages/NotFound'
import BookCard from "./components/pages/Book/components/BookCard";
import WishListPage from "./components/pages/WishListPage";
import { bookPath, newBookPath, editBookPath } from "./helpers/routes";
import NewBook from "./components/pages/NewBook";
import EditBook from "./components/pages/EditBook";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Main} path='/' exact />
          <Route component={NewBook} path={newBookPath()} strict exact />
          <Route component={EditBook} path={editBookPath()} strict exact />
          <Route component={BookCard} path={bookPath()} strict exact />
          <Route component={WishListPage} path='/wishlist' strict exact />
          <Route render={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
