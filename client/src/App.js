import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";
import Create from "./pages/Create";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import FriendRegistry from "./pages/FriendRegistry";
import FinalReset from "./pages/FinalReset";

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
import API from "./utils/API";

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
  notes: "",
  loggedIn: false
};

class App extends Component {
  state = initialState;

  componentDidMount() {
    console.log("auth");
    this.auth();
    console.log("post initial auth this.state: ", this.state);
  }

  updateStateItem = updates => {
    console.log("updateStateItem: ", updates);
    this.setState({
      ...this.state,
      uuid: updates.uuid,
      screenName: updates.screenName,
      firstName: updates.firstName,
      lastName: updates.lastName,
      pic: updates.pic,
      notes: updates.notes,
      account_key: ""
    });
  };

  updateState = updates => {
    console.log("updateState: ", updates);
    this.setState({
      ...this.state,
      [updates.key]: updates.value
    });
  };

  logout = () => {
    console.log("global logout");
    this.setState(initialState);
    API.logout()
    .then(res => console.log("logout response: ", res));
  }

  auth = () => {
    API.checkLogin()
    .then(res => {
      console.log("check res: ", res.data);
      this.setState({ loggedIn: res.data })
      console.log("post update loggedIn: ", this.state.loggedIn);
    });
  }

  

  render() {
    if(this.state.loggedIn) {
      console.log("you are logged in");
      return (
        <Router>
          <div>
            <Nav 
                logout={this.logout}
              />
            <Switch >
              <Route
                exact
                path="/Landing"
                render={() => (
                  <Landing 
                    update={this.updateState} 
                    state={this.state} 
                  />
                )}
              />
              <Route
                exact
                path="/create"
                render={() => (
                  <Create 
                    update={this.updateState} 
                    state={this.state} 
                  />
                )}
              />
              <Route
                exact
                path="/friends"
                render={() => (
                  <Friends 
                    update={this.updateState} 
                    state={this.state} 
                  />
                )}
              />
              <Route
                exact
                path="/FriendRegistry/:userId"
                render={props => (
                  <FriendRegistry
                    {...props}
                    update={this.updateState}
                    state={this.state}
                  />
                )}
              />
              <Route
                exact
                path="/Shopping"
                render={() => (
                  <Shopping 
                    update={this.updateState} 
                    state={this.state} 
                  />
                )}
              />
              <Route
                exact
                path="/Profile"
                render={() => (
                  <Profile 
                    update={this.updateState} 
                    state={this.state} 
                  />
                )}
              />
              <Route 
                component={NoMatch} 
              />
            </Switch>
          </div>
        </Router>
      );
    }else{
      console.log("you are logged out");
      return(
        <Router >
          <div>
            <Nav 
              logout={this.logout}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Start
                    updateState={this.updateState}
                    updateStateItem={this.updateStateItem}
                    state={this.state}
                  />
                )}
              />
              <Route
                exact
                path="/reset/:token"
                render={token => (
                  <FinalReset 
                    token={token}
                    update={this.updateState} 
                    state={this.state} 
                  />
                )}
              />
              <Route 
                component={NoMatch} 
                state={this.state}
              />
            </Switch>
          </div>
        </Router>
      )
    }
  }
}

export default App;
