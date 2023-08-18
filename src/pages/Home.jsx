import React from "react";

// StyleSheet
import "../style/Home.scss";

//Image
import Developer from "../images/Test-03.png";

// Icons

import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  
  return (
    <>
      <div id="home-page">
        <div className="home-welcome-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="main-title">
                  <div className="name">
                    <h1 title="Gowtham Kumar">
                      Hello <br />
                      I'm <br />
                      Praveen
                    </h1>
                  </div>
                  <div className="desigination">
                    <h1 title="Developer">
                      <span>F</span>
                      <span>r</span>
                      <span>o</span>
                      <span>n</span>
                      <span>t</span>
                      <span>-</span>
                      <span>E</span>
                      <span>N</span>
                      <span>D</span>
                      <br />
                      <span>D</span>
                      <span>e</span>
                      <span>v</span>
                      <span>e</span>
                      <span>l</span>
                      <span>o</span>
                      <span>p</span>
                      <span>e</span>
                      <span>r</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="developer-image">
                  <img src={Developer} alt="Web Developer png" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-bottom-sectinon">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="social-media-icons">
                  <a href="mailto:praveendhanush110@gmail.com">
                    <h6 title="praveendhanush110@gmail.com">praveendhanush110@gmail.com</h6>
                    <span>
                      <FaEnvelope />
                    </span>
                  </a>
                  <a href="https://github.com/praveendark10">
                    <h6 title="Praveen Github">github.com/praveendark10</h6>
                    <span>
                      <FaGithub />
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/praveen-ravi-02bb531b6">
                    <h6 title="Praveen linkedin">linkedin.com/in/praveen-ravi-02bb531b6</h6>
                    <span>
                      <FaLinkedinIn />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <Link className="know-more-btn" to="/about">
                  <span>
                    <BsMouse />
                  </span>
                  <h6 title="Developer">Know More</h6>
                </Link>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
