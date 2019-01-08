import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Start from "./pages/Start";
import Create from "./pages/Create";
import Share from "./pages/Share"

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/users" component={Start} />
        <Route exact path="/users/:id" component={Start} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/share" component={Share} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
