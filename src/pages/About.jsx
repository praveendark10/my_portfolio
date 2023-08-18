import React from "react";
import { Link } from "react-router-dom";

import "../style/About.scss";

import { BsArrowUpCircle, BsDownload } from "react-icons/bs";

import Resume from "../Doc/Praveen_resume.pdf";

export default function About() {
  return (
    <>
      <div id="about-page">
        <Link className="go-back" to="/">
          <h6>Go Back</h6>
          <span>
            <BsArrowUpCircle />
          </span>
        </Link>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              <div className="description-box">
                <p>
                  Hi, I'm Praveen Ravi (MCA), Software Engineer from
                  India, currently working at
                  <a
                    href="pathfinderanalysis.com/"
                    title="pathfinder business analysis"
                  >
                    Byzero Technologies,
                  </a>
                  erode as a Front-end Developer.
                </p>
              </div>
              <div className="education-box">
                <div className="title">
                  <h3>Education 🎓</h3>
                </div>
                <div className="block">
                  <h6 className="duration">2015 - 2018</h6>
                  <h6 className="institution">
                  Dr. R V Arts & Science College, Karamadai
                  </h6>
                  <h6 className="type"> BCA. Bachelor of computer science</h6>
                 
                </div>
                <div className="block">
                  <h6 className="duration">2018 – 2020</h6>
                  <h6 className="institution">
                  Sankara College of Science & Commerce, Coimbatore
                  </h6>
                  <h6 className="type">MCA. Master of Computer Applications</h6>
                </div>
                <div className="block">
                  <h6 className="duration">2014 - 2015</h6>
                  <h6 className="institution">
                    Chamraj higher secondary school
                  </h6>
                  <h6 className="type">H.S.L.C</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="tech-knowledge-box">
                <div className="title">
                  <h3 title="Developer Skils">Skill's 😜</h3>
                </div>
                <ul>
                  <li>
                    Working On
                    <ul>
                      <li>React Js</li>
                      <li>Javascript</li>
                      <li>Wordpress</li>
                    </ul>
                  </li>
                  <li>
                    Knowledge In
                    <ul>
                      <div className="col-lg-6">
                        <li>Javascript</li>
                        <li>React js</li>
                        <li>GitHub</li>
                      </div>
                      <div className="col-lg-6">
                        <li>WordPress</li>
                        <li>BootStrap</li>
                        <li>Scss</li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    Intrested In
                    <ul>
                      <li>Frontend Development</li>
                      <li>MERN</li>
                      <li>React Native</li>
                      <li>Electron Js</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="work-experiance">
                <div className="title">
                  <h3>Experiance ⚒️</h3>
                </div>
                
                <div className="box">
                  <h6 className="company" title="Byzero technologies erode">
                    Byzero Technologies, Erode
                  </h6>
                  <h6 className="role" title="web developer erode">
                    Juniour Frontend Developer
                  </h6>
                  <h6 className="duration" title="web developer erode">
                     Jun 2022 - Sep 2023
                  </h6>
                </div>
              
              </div>
            </div>
          </div>

          <div className="download-btn">
            <h6>Still Wanna my resume ?</h6>
            <a href={Resume} download>
              <p>Download</p>
              <BsDownload />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
