import React, { Component } from "react";
import { Jumbotron } from "styled-jumbotron-component";
import "./Banner.scss";

export default class Banner extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <div className="container">
          <div className="image">
            <img
              alt="Welcome to your professional community"
              src="https://static-exp1.licdn.com/sc/h/1hbr6t0oqhf2avswaaruivxtl"
            ></img>
          </div>
          <div className="text">
            <h1 className="awaken-headline">
              Keep Learning in the moments that matter
            </h1>

            <h2 className="awaken-subtitle">
              Courses for every step of your career. Instructors with real-world
              experience.
            </h2>

            <a
              href="http://www.linkedin.com/learning/subscription/products?destRedirectURL=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Flearning%2F&amp;lipi=urn%3Ali%3Apage%3Ad_homepage-guest-learning-home%3BsywUmYcySJWVZ4VZ8R%2BcAQ%3D%3D&amp;upsellOrderOrigin=default_guest_learning&amp;trk=lil_upsell_homepage-learning_hero-start-free-month-cta_subscription&amp;upsellTrackingId=Pwydr1njQpCQOBjVj3%2BPPA%3D%3D"
              className="freemonth freemonth--primary"
            >
              Start my free month
            </a>

            <a
              href="https://learning.linkedin.com/elearning-solutions-contact-us?veh=lil_upx&src=li-lil-homepage&upsellOrderOrigin=default_guest_learning&trk=lil-b2b-hp_hero"
              className="freemonth freemonth--muted"
            >
              Buy For My Team
            </a>
          </div>
        </div>
       </Jumbotron>
    );
  }
}
