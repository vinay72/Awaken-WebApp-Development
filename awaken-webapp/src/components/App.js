import React, { Component } from "react";
import Navbar from "./Navbar/index";
import Banner from "./Banner/index";
import ExploreCourses from "./ExploreCourses";
import { COURSES1 } from "../shared/courses1";
import { MODULES } from "../shared/modules";
import { COURSES2 } from "../shared/courses2";
import { COURSES3 } from "../shared/courses3";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses1: COURSES1,
      modules1: MODULES,
      courses2: COURSES2,
      courses3: COURSES3,
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <ExploreCourses
          courses1={this.state.courses1}
          modules1={this.state.modules1}
          courses2={this.state.courses2}
          courses3={this.state.courses3}
        />
      </div>
    );
  }
}
