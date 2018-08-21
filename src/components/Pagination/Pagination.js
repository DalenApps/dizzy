import React, { Component } from "react";
import "./Pagination.css";

class Pagination extends Component {
  render() {
    return (
      <div className="dz-paginator">
        <div className="dz-paginator-left">
          <span className="dz-paginator-label">Items per page</span>
          <div className="dz-paginator-pagepicker">
            <span className="dz-paginator-label">10</span>
          </div>
          <span class="dz-paginator-label">
            &nbsp;|&nbsp;&nbsp;1-10 of 103 items
          </span>
        </div>
        <div className="dz-paginator-right">
          <span className="dz-paginator-label">1 of 11 pages</span>
          <button className="dz-paginator-button-back"> &#9664; </button>
          <div className="dz-paginator-pagepicker">
            <span className="dz-paginator-label">10</span>
          </div>
          <button className="dz-paginator-button-next"> &#9654; </button>
        </div>
      </div>
    );
  }
}

export default Pagination;
