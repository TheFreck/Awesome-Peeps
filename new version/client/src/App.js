import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";
import Create from "./pages/Create";
import Friends from "./pages/Friends";
import FriendRegistry from "./pages/FriendRegistry";

// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Share from "./pages/Share";
import Start from "./pages/Start";

//Navigation imports ***PENDING PAGES CREATION***
// import Landing from "./pages/Landing";
import Shopping from "./pages/Shopping";
// import FriendRegistry from "./pages/FriendRegistry"
// import Profile from "./pages/Profile";
import ResetPswd from "./components/ResetPswd";

const initialState = {
  uuid: "",
  account_key: "",
  sessionId: "",
  email: "",
  firstName: "",
  lastName: "",
  screenName: "",
  pic: "",
  shareWithMe: [],
  shareWithOthers: [],
  notes: ""
};

class App extends Component {
  state = initialState;

  updateState = updates => {
    this.setState({
      ...this.state,
      [updates.key]: updates.value
    })
  }

  render(){
    return(
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* <Route exact path="/Landing" component={Landing} /> */}
            <Route 
              exact path="/"
              render={() => <Start update={this.updateState} state={this.state} />}
            />
            <Route 
              exact path="/landing"
              render={() => <Create state={this.state} />}
            />
            <Route 
              exact path="/create"
              render={() => <Create state={this.state} />}
            />
            <Route
              exact path="/reset"
              render={() => <ResetPswd state={this.state} />}
            />
            <Route
              exact path="/friends"
              render={() => <Friends state={this.state} />}
            />
            <Route 
              exact path="/friend-registry"
              render={() => <FriendRegistry state={this.state} />}
            />

            {/* //Navigation imports ***PENDING PAGES CREATION*** */}
            {/* <Route exact path="/Shopping" component={Shopping} />
            
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
            {/* //Navigation imports ***PENDING PAGES CREATION*** */}
            <Route exact path="/shopping" component={Shopping} />
            {/* <Route exact path="/Friends" component={Friends} />
            <Route exact path="/Profile" component={Profile} /> */}

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
