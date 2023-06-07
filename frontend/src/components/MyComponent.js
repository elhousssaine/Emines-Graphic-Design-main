import React, { useState } from 'react';
import ContentRec2 from "../components/ContentRec2";
import './MyComponent.css'; // Import the CSS file

function MyComponent() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="MyComponent"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <div className="RecContent backgroundvid full-height d-flex flex-column" >
            <div className="row title__RecContent">Fresh Alternative To Traditional Agencies</div>
      <div className="row mt-auto">
        <div className="col subtitle__RecContent">Discover our stunning portfolio, a testament to our design prowess.</div>
      </div>
      </div>
      ) : (
        
        <div className="RecContent  full-height d-flex flex-column">
            <div className="row title__RecContent">Fresh Alternative To Traditional Agencies</div>
      <div className="row mt-auto">
        <div className="col subtitle__RecContent">Discover our stunning portfolio, a testament to our design prowess.</div>
      </div>
      </div>
      
      )}
    </div>
  );
}

export default MyComponent;