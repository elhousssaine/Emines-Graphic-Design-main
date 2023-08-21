import React from "react";
import { NavLink } from "react-router-dom";
import "./Portfolio.css";
import MainRec from "../components/MainRec";


function Portfolio() {
  return (
    <div className="udc"> 

      <h1>Portfolio</h1>
 <div className="grid-container2">
  <div className="grid-item2">
    <div className="membername">
      <img 
        src="abb89a88-aa16-414a-a8bc-0dd70ef02a5f-1685999350625.png"
        alt="project"
        className="project"
      /> <div className="member-text">El Houssaine CHAHBOUN <br /><br /><br /><br /><br /><br /><br />  Club President</div>
    </div>
    <div className="membername">
   <img
        src="240705395_263481578927361_4858082345603598675_n.jpg"
        alt="project"
        className="project"
      />

  <div className="member-text">Your Text Here</div>
</div>
    <div className="membername">
      <img
        src="3Dglasses.jpg"
        alt="project"
        className="project"
      /><div className="member-text">Your Text Here</div>
    </div>
    <div className="membername">
      <video controls autoPlay loop muted
        src="elxlunchglw.mp4"
        alt="project"
        className="project"
      />
    </div>
      <div className="membername">
      <video controls autoPlay loop muted
        src="melusino.mp4"
        alt="project"
        className="project"
      />
    </div>
      <div className="membername">
      <video controls autoPlay loop muted
        src="jibit.mp4"
        alt="project"
        className="project"
      />
    </div>
            <div className="projectname">
      <video controls autoPlay loop muted
        src="elxpod.mp4"
        alt="project"
        className="project"
      />
    </div>
      <div className="membername">
      <video controls autoPlay loop muted
        src="Comp4.mp4"
        alt="project"
        className="project"
      />
    </div>
            <div className="membername">
      <video controls autoPlay loop muted
        src="mlinsta.mp4"
        alt="project"
        className="project"
      />
    </div>
      
    
      
  </div> 
      <br />
      <div className="bannerproj">
         <div class="bannerproj-content">
        <h1>Branding for MLYSF</h1>
      <br /><br />
        <p>Simplicity, clarity and power. The new design draws on a well-known trinity: the colour orange, expressing qualities close to the hearts of the Dutch people. Based on the typeface Nitti Grotesk (created by independent Dutch type foundry Bold Monday), the NL logo – with its subtle reference to tulip petals – and accompanying logotype express a modern attitude, whilst communicating their message with absolute clarity.</p>
  
        </div>
        <img 
        src="iphone.png"
        alt="project"/>
     
    </div>
</div>
<br />
<div className="grid-container2">
  <div className="grid-item2">
    <div className="membername">
      <img 
        src="abb89a88-aa16-414a-a8bc-0dd70ef02a5f-1685999350625.png"
        alt="project"
        className="project"
      /> <div className="member-text">El Houssaine CHAHBOUN <br /><br /><br /><br /><br /><br /><br />  Club President</div>
    </div>
    <div className="membername">
   <img
        src="240705395_263481578927361_4858082345603598675_n.jpg"
        alt="project"
        className="project"
      />

  <div className="member-text">Your Text Here</div>
</div>
    <div className="membername">
      <img
        src="3Dglasses.jpg"
        alt="project"
        className="project"
      /><div className="member-text">Your Text Here</div>
    </div>
    <div className="membername">
      <video controls autoPlay loop muted
        src="elxlunchglw.mp4"
        alt="project"
        className="project"
      />
    </div>
</div>
</div>
     
    
      
   
   <br />   
      Our sponsors play a crucial role in assisting us with covering hosting fees and ensuring the ongoing success of our graphic design workshops. Their support not only enables us to maintain our operations but also allows us to provide valuable educational experiences in the realm of graphic design. <br /><br />
      <img
              src="elxlogo2.png"
              alt="project"
              className="sponsor"   
            />
      <span  className="copyright"    > <br />    ©El Houssaine CHAHBOUN 2023 all rights reserved</span>
     </div>
      
  );
}

export default Portfolio;
