import React from "react";

function SmallScreenComponent() {
  return <div>Hello
            <img src="https://i.ibb.co/6tMw3Ps/Frame-40-1.png" alt="React Image" />
  </div>;
}
function Loogo() {
  // Function to check if the device has small dimensions
  const isSmallScreen = () => {
    return window.innerWidth <= 768; // Adjust the threshold as needed
  };

  return (
    <div>
      {/* Conditional rendering based on the screen dimensions */}
      {isSmallScreen() && <SmallScreenComponent />}
    </div>
  );
}

export default Loogo;