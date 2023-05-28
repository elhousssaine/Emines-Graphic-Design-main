import React from "react";
import "./Informations.css";

function Informations() {
  return (
    <section className="footer__info">
      <h2>Lets work together</h2>
      <p>
        UM6P
        <br />
        Lot 660, Hay Moulay Rachid, 
        <br />
        Benguerir, 43150, Maroc
        <br />
        +212 681 231 577
        <br />
        info@weareelx.com
        <br />
      </p>
      <div className="icons_group_contact">
        <a href="https://www.instagram.com/elx.design/">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://twitter.com/elhoussainechah">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://www.instagram.com/elx.design/">
          <i href="https://example.com" className="bi bi-instagram"></i>
        </a>
        <a href="https://www.instagram.com/elx.design/">
          <i className="bi bi-twitch"></i>
        </a>
      </div>
      <div className="logofooter">
      <img src="https://i.ibb.co/6tMw3Ps/Frame-40-1.png" alt="React Image" />
      </div>
    </section>
  );
}

export default Informations;
