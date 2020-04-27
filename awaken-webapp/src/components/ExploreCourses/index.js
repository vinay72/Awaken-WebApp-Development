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
            <ul >
              <button className="icon">
                
                Preview Course
              </button>
            </ul>
            <ul>
              <h3 className="card-content">{course1.name}</h3>
              {/* {course1.description} */}
            </ul>
            <ul className="users-desc">
              <p >{course1.users}</p>
              </ul>
          </div>
          {/* <Card className=" text-card pointer" onClick={this.setRoute}  >
            <CardImg src={course1.image} alt={course1.name} />
            <CardImgOverlay className="box">
              <div className="box-content">
                <ul className="icon">
                  <Button outline color="secondary" size="lg" block  ><li><i className="fa fa-play-circle"></i></li><br />Preview Course</Button>
                </ul>
              </div>
            </CardImgOverlay>
            <CardBody>
              <CardTitle><h4>{course1.name}</h4></CardTitle>
              <CardText>{course1.description}</CardText>
            </CardBody>




          </Card> */}
        </div>
      );
    });
    return (
      <div>
        <div className="courses-container">
          <h2 className="explore-courses__heading">Explore courses</h2>
          <div className="course-list">
            <ul className="tab-bar explore-courses__tab-toggles" role="tablist">
              <li
                className="tab-toggle explore-courses-tab-1-tab-toggle tab-1"
                role="tab"
                tabindex="0"
              >
                <label className="toggel-label">All Courses</label>
              </li>
              <li
                className="tab-toggle explore-courses-tab-2-tab-toggle tab-2"
                role="tab"
                tabindex="0"
              >
                <label className="toggel-label">Business</label>
              </li>
              <li
                className="tab-toggle explore-courses-tab-3-tab-toggle tab-3"
                role="tab"
                tabindex="0"
              >
                <label className="toggel-label">Technology</label>
              </li>
              <li
                className="tab-toggle explore-courses-tab-4-tab-toggle tab-4"
                role="tab"
                tabindex="0"
              >
                <label className="toggel-label">Creative</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <h3 className="trend-course">Trending Courses</h3>
        </div>
        <div className="row">{cours1}</div>
      </div>
    );
  }
}
