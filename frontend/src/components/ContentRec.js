import React from "react";
import "./ContentRec.css";
import { NavLink } from "react-router-dom";


function ContentRec(props) {
  let Styles = {
    color: "red",
    backgroundSize: "cover",
  };

  if (props.isImg === true) {
    const url_img = props.imgUrl;
    const back_img = "url(" + url_img + ")";
    const backimg = "url(ezgif.com-gif-maker.gif)"
    
  } else {
        
    Styles.backgroundImage =
      "linear-gradient(180deg," +
      props.hex1 +
      " 0%, " +
      props.hex2 +
      " 98.96%)";
  }

  return (
    <NavLink
      to={props.isClickImg ? "/project/" + props.prjId : "/"}
      style={{ textDecoration: "none" }}
    >
      <div
        className="RecContent  full-height d-flex flex-column"
        
      >
       {props.isImg ? <img src={props.imgUrl} alt="a balloon" className="myimg" /> : null}
        <div className="row title__RecContent">{props.title}</div>
        <div className="row mt-auto">
          <div className="col subtitle__RecContent">{props.parag1}</div>
          <div className="col subtitle__RecContent">
            {props.type ? props.parag2 : ""}
          </div>
          <div className="col subtitle__RecContent">
            {props.type ? "" : props.parag2}
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ContentRec;
