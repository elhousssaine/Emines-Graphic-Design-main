import React, { useState } from "react";
import "./FAQ.css";

const Plusicon = (
  <svg
    className="plus_icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
  </svg>
);

function FAQ() {
  const [rotate, setRotate] = useState(false);
  return (
    <div className="boite">
      <div className="container-faq">
        <h1>FAQ</h1>
        <div className="questions">
          <div className="visible-pannel">
            <h2>
              WHAT DO YOU CHARGE FOR YOUR GRAPHIC
              <br /> DESIGN SERVICES?
            </h2>
            {Plusicon}
          </div>
          <hr />
          <div className="toggle-pannel">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem et asperiores, quod qui in ducimus rerum nisi
              dolorum. Optio, vel?
            </p>
          </div>
                <div className="visible-pannel">
            <h2>
              WHAT DO YOU CHARGE FOR YOUR GRAPHIC
              <br /> DESIGN SERVICES?
            </h2>
          </div>
          <div className="toggle-pannel">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem et asperiores, quod qui in ducimus rerum nisi
              dolorum. Optio, vel?
            </p>
          </div>
          <hr />
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js"></script>
      <script></script>
    </div>
  );
}

export default FAQ;
