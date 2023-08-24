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

  );
}

export default Home;
