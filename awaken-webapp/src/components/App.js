import React, { Component } from "react";
import Navbar from "./Navbar/index";
import Banner from "./Banner/index";
import ExploreCourses from "./ExploreCourses";
import { COURSES1 } from '../shared/courses1';




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      courses1: COURSES1,
      
    }

  }
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <ExploreCourses courses1={this.state.courses1}/>
      </div>
    );
  }
}
