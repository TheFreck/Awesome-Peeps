import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
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
// import ResetPswd from "./components/ResetPswd";
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
    this.auth();
    console.log("post initial auth this.state: ", this.state);
  }

  updateStateItem = updates => {
    console.log("app update state item loggedIn: ", updates);
    let loggedIn;
    if(!updates.loggedIn) {
      console.log("logged in = false");
      loggedIn = false;
    }else{
      console.log("logged in = true");
      loggedIn = true;
    }
    this.setState({
      ...this.state,
      uuid: updates.uuid,
      screenName: updates.screenName,
      firstName: updates.firstName,
      lastName: updates.lastName,
      pic: updates.pic,
      notes: updates.notes,
      myItems: [],
      friends: [],
      loggedIn: loggedIn,
      account_key: ""
    });
  };

  updateState = updates => {
    this.setState({
      ...this.state,
      [updates.key]: updates.value
    });
  };

  logout = event => {
    event.preventDefault();
    console.log("global logout");
    this.setState(initialState);
    this.setState({ loggedIn: false })
    API.logout();
  }

  auth = () => {
    API.checkLogin()
    .then(res => {
      console.log("App.js auth: ", res.data);
      this.setState({ loggedIn: res.data })
    });
  }

  render() {
    // console.log("this.state.loggedIn", this.state.loggedIn)
    if(this.state.loggedIn) {
      console.log("you are logged in");
      return (
        <Router>
          <div>
            <Nav 
              goodbye={this.logout}
            />
            <Switch >
              <Route
                exact
                path="/Create"
                render={() => (
                  <Create 
                  auth={this.auth}
                  update={this.updateState} 
                  state={this.state} 
                  />
                  )}
              />
              <Route
                exact
                path="/Friends"
                render={() => (
                  <Friends 
                  auth={this.auth}
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
                  auth={this.auth}
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
                  auth={this.auth}
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
                    auth={this.auth}
                    update={this.updateState} 
                    state={this.state} 
                  />
                )}
              />
              <Route
                path="/"
                render={() => (
                  <Landing 
                    auth={this.auth}
                    update={this.updateState} 
                    state={this.state} 
                  />
                )}
              />
              {/* <Route 
                render={() => {
                  <NoMatch />
                }}
              /> */}
            </Switch>
          </div>
        </Router>
      );
    }else{
      console.log("you are logged out");
      return(
        <Router >
          <div>
            <Switch>
              <Route
                exact
                path="/reset/:token"
                render={token => (
                  <FinalReset 
                    auth={this.auth}
                    token={token}
                    update={this.updateState} 
                    state={this.state} 
                  />
                )}
              />
              <Route
                path="/"
                render={() => (
                  <Start
                    auth={this.auth}
                    updateState={this.updateState}
                    updateStateItem={this.updateStateItem}
                    state={this.state}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      )
    }
  }
}

export default App;
