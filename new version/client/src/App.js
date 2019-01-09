import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";
import Start from "./pages/Start";
import Create from "./pages/Create";
import Share from "./pages/Share"
import Friends from "./pages/Friends"

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
        <Route exact path="/friends" component={Friends} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
