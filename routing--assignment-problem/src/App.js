import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from "react-router-dom";

import Home from "./containers/Home/Home";
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import PageNotFound from "./containers/PageNotFound/PageNotFound";
import "./App.css";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Route path="/" exact component={Home} />            
            {/* <Route path="/all-courses" exact render={() => <Redirect to="/courses" />} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
