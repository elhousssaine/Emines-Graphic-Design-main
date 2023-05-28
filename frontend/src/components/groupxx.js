import Contact from "../components/Contact";
import Informations from "../components/Informations";
import "./groupxx.css";

function groupxx() {
  return (
    <div className="d-flex justify-content-evenly sponsors">
      <Contact/>
      <Informations/>
    </div>
  );
}

export default groupxx;
