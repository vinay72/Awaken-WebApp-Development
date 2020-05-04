import React, { Component } from "react";
import Navbar from "./Navbar/index";
import Banner from "./Banner/index";
import ExploreCourses from "./ExploreCourses";
import { COURSES1 } from '../shared/courses1';
import { MODULES } from '../shared/modules';




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      courses1: COURSES1,
      modules1: MODULES
      
    }

  }
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <ExploreCourses courses1={this.state.courses1} modules1={this.state.modules1}/>
      </div>
    );
  }
}
