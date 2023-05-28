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

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setlight());
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <ContentRec4 key="content-rec-4" title="" />
        <ContentRec2 key="content-rec-2" title="" />
        <Feed number="5" />
        <Blackbords />
        <ContentRec5 key="content-rec-5" title="" />
      </div>
      <div className="MainRec">
        <footer
          className="App-footer d-flex mb-3 justify-content-between flex-wrap"
          id="footer_section_id"
        >
          <Informations />
          <Contact />
        </footer>
      </div>
    </div>
  );
}

export default Home;