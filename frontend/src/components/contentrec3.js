import React from "react";
import "./contentrec3.css";
import { NavLink } from "react-router-dom";

function ContentRec3(props) {
  let Styles = {
    color: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <NavLink
      to={props.isClickImg ? "/project/" + props.prjId : "/"}
      style={{ textDecoration: "none" }}
    >
      <div
        className="RecContent3 container full-height d-flex flex-column"
        style={Styles}
      >
        <div className="row title__RecContent2">{props.title}</div>
        <div className="row mt-auto">
          <div className="col subtitle__RecContent2">{props.parag1}</div>
          <div className="col subtitle__RecContent2">
            {props.type ? props.parag2 : ""}
          </div>
          <div className="col subtitle__RecContent2">
            {props.type ? "" : props.parag2}
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ContentRec3;
