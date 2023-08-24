import React from "react";
import '../components/Navbar.css';
import { NavLink } from "react-router-dom";
import "./Udc.css";
import MainRec from "../components/MainRec";


function Udc() {
  return (
    <div className="udc"> 

      <h1>Welcome to ELX</h1>
 
  


      
     
    
      
   
   
      Our vibrant community of university students, backed by UM6P's state-of-the-art facilities, delivers a dynamic blend of youth and innovation. <br /> With numbers on our side, we bring a diverse range of ideas and perspectives to the table. From captivating graphics to cutting-edge websites, we harness the power of collaboration and unleash unparalleled creativity. Join us and experience a new era of design excellence . <br /><br /><br />
    <NavLink
  to="/portfolio"
  id="Portfoliolink"
>
  Check out our portfolio
</NavLink>  &nbsp;&nbsp;  &nbsp;&nbsp; <a className="link"  href="/Home">Hire us</a>.

      <br /><br />
      <img
              src="elxlogo2.png"
              alt="member"
              className="sponsor"   
            />
      <span  className="copyright"    > <br />    ©El Houssaine CHAHBOUN 2023 all rights reserved</span>
     </div>
      
  );
}

export default Udc;
