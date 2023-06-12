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

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setlight());
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <ContentRec4 key="content-rec-4" title="" />
        <div className="RecContent  full-height d-flex flex-column">
            <div className="row title__RecContent">Fresh Alternative To Traditional Agencies</div>
      <div className="row mt-auto">
        <div className="col subtitle__RecContent">Our vibrant community of university students, backed by UM6P's state-of-the-art facilities, delivers a dynamic blend of youth and innovation. With numbers on our side, we bring a diverse range of ideas and perspectives to the table. From captivating graphics to cutting-edge websites, we harness the power of collaboration and unleash unparalleled creativity. Join us and experience a new era of design excellence that sets your brand apart from the rest. Get ready to redefine the game together!</div>
      </div>
      </div>
        <ContentRec5 key="content-rec-5" title="" />
        <Blackbords />
        <MyComponent />
                       <div className="feed-grid">
              <div className="RecContentf  full-height d-flex flex-column">
            <img src="d5b5fd2b-3aa8-4a92-9b0f-1bf09fd9bddc-1685999424447.png" alt="a balloon" class="myimg"></img><div className="row title__RecContentf">Fresh Alternative To Traditional Agencies</div>
      <div className="row mt-auto">
        <div className="col subtitle__RecContentf">Our vibrant community of university students, backed by UM6P's state-of-the-art facilities, delivers a dynamic blend of youth and innovation.</div>
      </div>
      </div>
      <div className="RecContentf  full-height d-flex flex-column">
            <img src="8511afcb-4125-47ff-8959-051de290d75c-1685999386255.png" alt="a balloon" class="myimg"></img><div className="row title__RecContentf">Fresh Alternative To Traditional Agencies</div>
      <div className="row mt-auto">
        <div className="col subtitle__RecContentf">Our vibrant community of university students, backed by UM6P's state-of-the-art facilities, delivers a dynamic blend of youth and innovation.</div>
      </div>
      </div>
      <div className="RecContentf  full-height d-flex flex-column">
            <img src="d5b5fd2b-3aa8-4a92-9b0f-1bf09fd9bddc-1685999424447.png" alt="a balloon" class="myimg"></img><div className="row title__RecContentf">Fresh Alternative To Traditional Agencies</div>
      <div className="row mt-auto">
        <div className="col subtitle__RecContentf">Our vibrant community of university students, backed by UM6P's state-of-the-art facilities, delivers a dynamic blend of youth and innovation.</div>
      </div>
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

export default Home;
