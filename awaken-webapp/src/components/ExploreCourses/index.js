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
    return (
      <div>
        <div className="courses-container">
          <h2 className="explore-courses__heading">Explore courses</h2>
        </div>
        <div className="row">
          <h3 className="trend-course">Trending Courses</h3>
        </div>
        <div className="row">{cours1}</div>
      </div>
    );
  }
}
