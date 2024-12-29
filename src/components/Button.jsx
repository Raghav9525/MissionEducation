
import React from "react";

const Button = ({ onFilter }) => {
  return (
    <div className="row">
      <div className="col-12 ">
        <div className="text-center ">
          <div className="btn btn-danger mx-3 course_list_btn" onClick={() => onFilter("all")}>All</div>
          <div className="btn btn-danger mx-3 course_list_btn" onClick={() => onFilter("medical")}>Medical</div>
          <div className="btn btn-danger mx-3 course_list_btn" onClick={() => onFilter("engineering")}>Engineering</div>
          <div className="btn btn-danger mx-3 course_list_btn" onClick={() => onFilter("management")}>Management</div>
          <div className="btn btn-danger  mx-3 course_list_btn" onClick={() => onFilter("education")}>Education</div>
        </div>
        </div>
    </div>
  );
};

export default Button;
