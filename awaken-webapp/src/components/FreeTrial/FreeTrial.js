import React, { Component } from "react";
import "./FreeTrial.scss";

export default class FreeTrial extends Component {
  render() {
    return (
      <div >
          <a className="trial-button" href="https://www.linkedin.com/learning/subscription/products?destRedirectURL=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Flearning%2F&lipi=urn%3Ali%3Apage%3Ad_homepage-guest-learning-home%3BdGKVmX4SQs%2BUHXjUCb7uPg%3D%3D&upsellOrderOrigin=default_guest_learning&trk=lil_upsell_homepage-learning_nav-header-join_subscription&upsellTrackingId=ncam%2BTShTFyjYMiV%2FWDohQ%3D%3D" alt="trial-link">Start Free Trial</a>
      </div>
    );
  }
}
