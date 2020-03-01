import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import Todo from "./components/Todo";
import User from "./components/User";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/todo" />} />
            <Route exact strict path="/todo" component={Todo} />
            <Route exact path="/user" sensitive component={User} />
            <Route
              exact
              path="/User"
              sensitive
              component={() => <div>User </div>}
            />
            <Route component={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
