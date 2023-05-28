import React from "react";
import "./ContentRec5.css";
import { NavLink } from "react-router-dom";

function ContentRec5(props) {
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
        className="RecContent5  full-height d-flex flex-column"
        style={Styles}
      >
            <img className="ImgRecContent5" src="ezgif.com-video-to-gif22.gif" alt="Description of the image"/>
        
      </div>
    </NavLink>
  );
}

export default ContentRec5;
