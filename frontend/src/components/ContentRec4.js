import React from "react";
import "./ContentRec4.css";
import { NavLink } from "react-router-dom";

function ContentRec4(props) {
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
        className="RecContent4  full-height d-flex flex-column"
        style={Styles}
      >
            <img className="ImgRecContent5" src="ezgif.com-gif-maker.gif" alt="Description of the image"/>
        
      </div>
    </NavLink>
  );
}

export default ContentRec4;
