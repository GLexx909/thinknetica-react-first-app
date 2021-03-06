import React from 'react'
import {Router, Route, Switch} from "react-router-dom";
import Main from "./components/pages/Main";
import NotFound from './components/pages/NotFound'
import BookCard from "./components/pages/Book/components/BookCard";
import WishListPage from "./components/pages/WishListPage";
import { bookPath, newBookPath, editBookPath } from "./helpers/routes";
import NewBook from "./components/pages/NewBook";
import EditBook from "./components/pages/EditBook";
import { createBrowserHistory } from 'history'

const browserHistory = createBrowserHistory();

class App extends React.Component {

  render() {
    const history = this.props.history || browserHistory;

    return (
      <Router history={history}>
        <Switch>
          <Route component={Main} path='/' exact />
          <Route component={NewBook} path={newBookPath()} strict exact />
          <Route component={EditBook} path={editBookPath()} strict exact />
          <Route component={BookCard} path={bookPath()} strict exact />
          <Route component={WishListPage} path='/wishlist' strict exact />
          <Route render={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
