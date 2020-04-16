import React, { Component } from "react";
import Navbar from "./Navbar/index";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./Banner/index";
import ExploreCourses from "./ExploreCourses/index";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <ExploreCourses />
      </div>
    );
  }
}
