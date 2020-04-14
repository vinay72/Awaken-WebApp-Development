import React, { Component } from 'react';
// import Navbar from "./Navbar/index";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./Banner/index";

export default class App extends Component {
  render() {
    return (
      <div>
      {/* <Router>
        <Switch> */}
          {/* <Route path="/login" component={Login} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/euro-login" component={EuroLogin} /> */}
          {/* <Route exact path="/" component={Navbar} />
          <Route exact path="/" component={Banner} /> */}
          
          {/* <Route path="/collection/:id" component={Collections} />
          <Route path="/activities" component={Activities} />
          <Route path="/magicStory" component={MagicStory} />
          <Route path="/magicStoryCard" component={magicStoryCard} />
          <Route path="/temp" component={Temp} />
          <Route component={NotFound} /> */}
        {/* </Switch>
      </Router> */}
      {/* <Navbar /> */}

      <Banner />
      </div>
    );
  }
}


