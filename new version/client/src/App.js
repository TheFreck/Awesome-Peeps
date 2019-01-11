import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";
import Create from "./pages/Create";
<<<<<<< HEAD
import Friends from "./pages/Friends";
import FriendRegistry from "./pages/FriendRegistry";

=======
import Shopping from "./pages/Shopping";
import Signup from "./components/Signup";
import Login from "./components/Login";
>>>>>>> 027f03cd0914fd7548dd126a4490cfbb479237b0
// import Share from "./pages/Share";

//Navigation imports ***PENDING PAGES CREATION***
// import Landing from "./pages/Landing";
// import Shopping from "./pages/Shopping";
// import FriendRegistry from "./pages/FriendRegistry"
// import Profile from "./pages/Profile";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        {/* <Route exact path="/Landing" component={Landing} /> */}
        <Route exact path="/Create" component={Create} />
<<<<<<< HEAD
        <Route exact path="/Friends" component={Friends} />
        <Route exact path="/FriendRegistry" component={FriendRegistry} />

        {/* //Navigation imports ***PENDING PAGES CREATION*** */}
        {/* <Route exact path="/Shopping" component={Shopping} />
        
=======
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Login} />
        {/* //Navigation imports ***PENDING PAGES CREATION*** */}
        <Route exact path="/Shopping" component={Shopping} />
        {/* <Route exact path="/Friends" component={Friends} />
>>>>>>> 027f03cd0914fd7548dd126a4490cfbb479237b0
        <Route exact path="/Profile" component={Profile} /> */}

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
