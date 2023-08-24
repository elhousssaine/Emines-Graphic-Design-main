import React from "react";
import { NavLink } from "react-router-dom";
import "./Udc.css";
import MainRec from "../components/MainRec";
import Contact from "../components/Contact";
import Informations from "../components/Informations";

function Udc() {
  return (
    <div className="udc"> 
      <div className="logo-and-title">
        <img
          src="https://i.ibb.co/2vQJ7Zw/ezgif-com-video-to-gif-4.gif"
          alt="Animated GIF"
          className="logo"
        />

        
      </div>
       <br />
      

      The Club is a gathering point for students interested in all disciplines of Art and Design with the aim of promoting and supporting an enthusiasm for visual arts. Students are organized in a team format for a year-long stretch with the option to stay longer if they choose to. During the year, all team members are given weekly workshops and assignments that complement existing skills and develop new ones.

Examples of these skills are 3D visualization, rapid rendering, color theory, sculpture, advanced media, etc. In addition to acquiring these skills, members are expected to pursue their individual art works that utilize these new skills in original works of art, thus applying the newly acquired skills in practical situations in line with AUM’s educational philosophy that strongly emphasizes translating theory into practice.
      <br />
        <div className="video-container">
        <video controls autoPlay loop muted className="autoplay-video">
          <source
            src="/udcvideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <br />
      <h1>Mission of the Club</h1>
      The AUM Arts Club operates with the mission of sparking and perpetuating waves of achievement among students. By creating a community within a community, the club is dedicated to supporting both the arts and the artists themselves. The club's objectives encompass a range of goals, including engaging with the wider community through outreach initiatives, collaborations, and interactive exhibitions. It also seeks to cultivate a deep appreciation for art and promote artistic growth through exhibitions and educational opportunities. The club empowers artists by facilitating connections among them, encouraging self-discovery, and embracing cultural heritage. Moreover, it aims to nurture students' creative and innovative involvement in the visual arts, fostering their role as responsible global citizens. By integrating arts, technology, and academics, the club aspires to create a comprehensive and unified curriculum. The club's guidance leads students through specific artistic explorations, fostering self-confidence, creativity, and critical thinking. Ultimately, the goal is to firmly establish the AUM Arts Club as a vital component of student life and the advancement of the Liberal Arts program at AUM.
      <br />
      <h1>Club Members</h1>
 <div className="grid-container">
  <div className="grid-item">
    <div className="membername">
      <img 
        src="zgpj82dW_400x400.jpg"
        alt="member"
        className="member"
      /> <div className="member-text">El Houssaine CHAHBOUN <br /><br /><br /><br /><br /><br /><br />  Club President</div>
    </div>
    <div className="membername">
  <img
    src="IMG_5530.png"
    alt="member"
    className="member"
  />
  <div className="member-text">Your Text Here</div>
</div>
    <div className="membername">
      <img
        src="zgpj82dW_400x400.jpg"
        alt="member"
        className="member"
      /><div className="member-text">Your Text Here</div>
    </div>
    <div className="membername">
      <img
        src="IMG_5530.png"
        alt="member"
        className="member"
      /><div className="member-text">Your Text Here</div>
    </div>
      
  </div> 
        
</div>

      
     
    
      
   
   <br />   
      Our sponsors play a crucial role in assisting us with covering hosting fees and ensuring the ongoing success of our graphic design workshops. Their support not only enables us to maintain our operations but also allows us to provide valuable educational experiences in the realm of graphic design. <br />
      
      <h1>Club Activities</h1>
    <img
    src="ezgif.com-gif-maker.gif"
    alt="workshop"
    className="gif-container"
    
  />
     <br /> <br />
In our club, we specialize in hosting dynamic workshops centered around the captivating realm of graphic design. Our engaging sessions are crafted to inspire and equip participants with essential design skills, fostering creativity and a deep understanding of visual communication. Join us as we explore the vibrant world of graphic design together!
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
