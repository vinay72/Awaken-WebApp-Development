import React, { Component } from "react";

import "./ExploreCourses.scss";

export default class ExploreCourses extends Component {
  render() {
    const cours1 = this.props.courses1.map((course1) => {
      return (
        <div key={course1.id} className="col-12 col-md-3 ">
          <div className="content">
            <ul className="img-course">
              <img src={course1.image} alt={course1.name}></img>
            </ul>
            <ul className="course-time">
              <p>{course1.time}</p>
            </ul>

            <ul>
              <button className="icon">Preview Course</button>
            </ul>
            <ul>
              <h3 className="card-content">{course1.name}</h3>
            </ul>
            <ul className="users-desc">
              <p>{course1.users}</p>
            </ul>
          </div>
        </div>
      );
    });
    const cours2 = this.props.courses2.map((course2) => {
      return (
        <div key={course2.id} className="col-12 col-md-3 ">
          <div className="content">
            <ul className="img-course">
              <img src={course2.image} alt={course2.name}></img>
            </ul>
            <ul className="course-time">
              <p>{course2.time}</p>
            </ul>

            <ul>
              <button className="icon">Preview Course</button>
            </ul>
            <ul>
              <h3 className="card-content">{course2.name}</h3>
            </ul>
            <ul className="users-desc">
              <p>{course2.users}</p>
            </ul>
          </div>
        </div>
      );
    });
    const cours3 = this.props.courses3.map((course3) => {
      return (
        <div key={course3.id} className="col-12 col-md-3 ">
          <div className="content">
            <ul className="img-course">
              <img src={course3.image} alt={course3.name}></img>
            </ul>
            <ul className="course-time">
              <p>{course3.time}</p>
            </ul>

            <ul>
              <button className="icon">Preview Course</button>
            </ul>
            <ul>
              <h3 className="card-content">{course3.name}</h3>
            </ul>
            <ul className="users-desc">
              <p>{course3.users}</p>
            </ul>
          </div>
        </div>
      );
    });
    const cours4 = this.props.courses4.map((course4) => {
      return (
        <div key={course4.id} className="col-12 col-md-3 ">
          <div className="content">
            <ul className="img-course">
              <img src={course4.image} alt={course4.name}></img>
            </ul>
            <ul className="course-time">
              <p>{course4.time}</p>
            </ul>

            <ul>
              <button className="icon">Preview Course</button>
            </ul>
            <ul>
              <h3 className="card-content">{course4.name}</h3>
            </ul>
            <ul className="users-desc">
              <p>{course4.users}</p>
            </ul>
          </div>
        </div>
      );
    });
    const cours5 = this.props.courses5.map((course5) => {
      return (
        <div key={course5.id} className="col-12 col-md-3 ">
          <div className="content">
            <ul className="img-course">
              <img src={course5.image} alt={course5.name}></img>
            </ul>
            <ul className="course-time">
              <p>{course5.time}</p>
            </ul>

            <ul>
              <button className="icon">Preview Course</button>
            </ul>
            <ul>
              <h3 className="card-content">{course5.name}</h3>
            </ul>
            <ul className="users-desc">
              <p>{course5.users}</p>
            </ul>
          </div>
        </div>
      );
    });
    const modle1 = this.props.modules1.map((module1) => {
      return (
        <div key={module1.id} className="col-12 col-md-3 ">
          <div className="show-more-less">
            <ul className="module-list">
              <li className="module-list-items">
                <a href={module1.href} className="module-content">
                  <h2 className="">{module1.name}</h2>
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="courses-container">
          <h2 className="explore-courses__heading">Explore courses</h2>
        </div>
        <div className="row">
          <h3 className="trend-course">TRENDING COURSES</h3>
        </div>
        <div className="row">{cours1}</div>
        <div className="section-content">
          <div className="right-course">
            <h3 className="title-heading">Find the right course for you</h3>
            <p class="pill-subtitle">
              Choose from over 15,000 courses, dozens added each week.
            </p>
          </div>
          <div className="row1">
            <h3 className="topics">Popular Topics</h3>
            {modle1}
          </div>
        </div>
        <div className="row">
          <h3 className="trend-course">
            TRENDING NASBA CONTINUING PROFESSIONSL EDUCATION (CPE) COURSES
          </h3>
        </div>
        <div className="row">{cours2}</div>
        <div className="row">
          <h3 className="trend-course">TRENDING SPREADSHEETS COURSES</h3>
        </div>
        <div className="row">{cours3}</div>
        <div className="skill">
          <div className="skills-desc">
            <img
              className="title-img"
              alt=""
              src="https://static-exp1.licdn.com/sc/h/dobk0zdbnx1j8bw80qznl7kmg"
            ></img>
            <h2 className="item-heading">Prove your skills</h2>
            <p className="subheading">
              Earn certificates to add to your Immeasurable profile.
            </p>
          </div>
          <div className="skills-desc">
            <img
              className="title-img"
              alt=""
              src="https://static-exp1.licdn.com/sc/h/4bqnl28qm2h3ho4cad1tuxemr"
            ></img>
            <h2 className="item-heading">Learn on your time</h2>
            <p className="subheading">
              Watch bite-sized videos or in-depth courses.
            </p>
          </div>
        </div>
        <div className="row">
          <h3 className="trend-course">TRENDING LEADERSHIP SKILLS COURSES</h3>
        </div>
        <div className="row">{cours4}</div>
        <div className="row">
          <h3 className="trend-course">
            TRENDING Project Management Institute (PMI) COURSES
          </h3>
        </div>
        <div className="row">{cours5}</div>
      </div>
    );
  }
}
