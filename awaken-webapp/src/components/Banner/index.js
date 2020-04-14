import React, { Component } from "react";
import { Jumbotron } from "styled-jumbotron-component";
import "./Banner.scss";

export default class Banner extends Component {
  render() {
    return (
        <div className="banner-container">
            <Jumbotron fluid>
                <div className="awaken-content">
                <h1 class="awaken-headline">
                    Keep Learning in the moments that matter
                </h1>

                <h2 class="awaken-subtitle">
                    Courses for every step of your career. Instructors with real-world
                    experience.
                </h2>
                </div>
                <img class="awaken-illustration " alt="Welcome to your professional community" src="https://static-exp1.licdn.com/sc/h/1hbr6t0oqhf2avswaaruivxtl"></img>
            </Jumbotron>
            
        </div>    
    );
  }
}
