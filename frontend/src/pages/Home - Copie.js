import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import Informationsdesigners from "../components/Informationsdesigners";
import Contact from "../components/Contact";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setlight, setdark } from "../reducers/themeReducer";
import MainRec from "../components/MainRec";


function Project() {
  const output = useParams();
  const api_url = "/api/projects/get/" + output.prjId;
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setdark());

    const getProject = async () => {
      setLoading(true);
      const resp = await axios
        .get(api_url)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      setProject(resp[0]);
      setLoading(false);
    };
    getProject();
  }, []);

  if (project && !loading) {
    return (
      <div className="fill ">
        <section className="project_title_section">
          <div className="row">
            <h1 className="section_title col">{project.title}</h1>
          </div>
        </section>
        <img
          src={project.imgs[1].path_url}
          className="d-flex projectImg_1 center"
        ></img>
        <div
          className="container MainRec1"
          style={{
            background:
              "linear-gradient(180deg," +
              project.hex1 +
              " 0%, " +
              project.hex2 +
              " 98.96%)",
          }}
        >
          <div className="text2 row">Project description</div>
          <div className="row marge">
            <div className="text3 col">{project.parag1}</div>
            <div className="text4 col">{project.parag2}</div>
          </div>
        </div>
        {project.imgs.map((img, i) => {
          if (i > 1)
            return (
              <img
                src={img.path_url}
                className="d-flex projectImg_2 center"
              ></img>
            );
        })}
        <div className="container MainRec2">
          <div className="text2 row">About the designer</div>
          <div className="aboutdesigner d-flex">
            <a>
              <i className="bi bi-facebook"></i>
            </a>
            <a>
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/m_s_lyafi/">
              <i className="bi bi-instagram"></i>
            </a>
            <a>
              <i className="bi bi-twitch"></i>
            </a>
          </div>
        </div>
      <div className="container MainRec">
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
  } else {
    return <div>Still loading</div>;
  }
}

export default Project;
