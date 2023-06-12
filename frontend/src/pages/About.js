import "./Home.css";
import Contact from "../components/Contact";
import Feed from "../components/Feed";
import Informations from "../components/Informations";
import MainRec from "../components/MainRec";
import "../components/Navbar";
import News from "../components/News";
import Parteners from "../components/Parteners";
import ContentRec2 from "../components/ContentRec2";
import ContentRec3 from "../components/contentrec3";
import ContentRec4 from "../components/ContentRec4";
import ContentRec5 from "../components/ContentRec5";
import FAQ from "../components/FAQ";
import Blackbords from "../components/Blackbords";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";
import { useEffect } from "react";
import Loogo from "../components/loogo";
import MyComponent from "../components/MyComponent";

function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setlight());
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <div className="RecContent  full-height d-flex flex-column">
            <div className="row title__RecContent">Fresh Alternative To Traditional Agencies</div>
      <div className="row mt-auto">
        <div className="col subtitle__RecContent">We are a dynamic and talented team of university students who are passionate about graphic design. We combine our creativity, expertise, and fresh perspectives to deliver outstanding design solutions for businesses and organizations like yours.  One of the key advantages of working with a junior entreprise like ours is the abundance of talent and resources at our disposal. With our team of enthusiastic and ambitious students, you benefit from the collective knowledge and creativity of multiple individuals. We thrive on collaboration, constantly challenging and inspiring one another to push the boundaries of design and deliver innovative solutions tailored to your unique needs.</div>
      </div>
      </div>
        <ContentRec5 key="content-rec-5" title="" />
              <div className="RecContent  full-height d-flex flex-column">
            <div className="row title__RecContent">Professionalism Meets Youthful Energy</div>
      <div className="row mt-auto">
        <div className="col subtitle__RecContent">We understand that working with a student-run enterprise might raise questions about reliability and professionalism. Rest assured, we hold ourselves to the highest standards of professionalism and integrity. We treat every project with the same level of dedication and commitment as any established design agency, ensuring timely delivery and open communication throughout the entire process.

Whether you are a startup looking to establish a strong brand presence, an established company seeking a fresh design perspective, or an organization with a specific design challenge, we are here to help you bring your vision to life.</div>
      </div>
      </div>
      <div className="RecContentf  full-height d-flex flex-column">
            <img src="iPhone XC Mockup (3).png" alt="a balloon" class="myimg"></img><div className="row title__RecContentf">An Innovative & Multidisciplinary Team</div>
      <div className="row mt-auto">
        <div className="col subtitle__RecContentf">With EGX, say goodbye to the worries of turning your ideas into stunning designs and seamless final products. Whether it's a website or a mobile app, we handle everything from design to code.

Our multidisciplinary team blends creativity and technical expertise, effortlessly bridging the gap between imagination and execution. From captivating concepts to visually striking designs, we bring your vision to life.

No need to juggle multiple agencies. At EGX, we offer comprehensive design and development solutions all under one roof. </div>
      </div>
      </div>
      </div>
      <div className="RecContentportfolio  full-height d-flex flex-row">
      <div className="row title__RecContentportfolio">More Projects</div><div className="col subtitle__RecContentportfolio">Discover our stunning portfolio, a testament to our design prowess.</div></div>
      <div className="MainRec">
                <footer className="App-footer  flex-wrap mb-3 justify-content-between" id="footer_section_id">
  <div className="footer-contact">
    <Contact key="cntct" />
  </div>
  <div className="footer-information">
    <Informations key="info" />
  </div>
</footer>
      </div>
    </div>
  );
}

export default About;
