import React, { Component } from "react";
import "./ExploreCourses.scss";

export default class ExploreCourses extends Component {
  render() {
    return (
      <div className="courses-container">
        <h2 className="explore-courses__heading">Explore courses</h2>
        <div className="course-list">
          <ul className="tab-bar explore-courses__tab-toggles" role="tablist">
            <li className="tab-toggle explore-courses-tab-1-tab-toggle tab-1" role="tab" tabindex="0">
              <label className="toggel-label">All Courses</label>
            </li>
            <li className="tab-toggle explore-courses-tab-2-tab-toggle tab-2" role="tab" tabindex="0">
              <label className="toggel-label">Business</label>
            </li>
            <li className="tab-toggle explore-courses-tab-3-tab-toggle tab-3" role="tab" tabindex="0">
              <label className="toggel-label">Technology</label>
            </li>
            <li className="tab-toggle explore-courses-tab-4-tab-toggle tab-4" role="tab" tabindex="0">
              <label className="toggel-label">Creative</label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
