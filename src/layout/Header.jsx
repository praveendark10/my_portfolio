import React from "react";
import { NavLink } from "react-router-dom";

// Style
import "../style/Layout.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <NavLink exact to="/" className="logo" title="Gowtham Kumar Web Developer">
                <span>PORT</span>
                <br />
                <span>FOLIO</span>
              </NavLink>
            </div>
            <div className="col-6">
              <div className="nav-link">
                <ul>
                  <li>
                    <NavLink exact to="/projects">
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/contact">
                      Contact
                    </NavLink>
                  </li>

                  {/* <button className="theme-switch">🌞</button> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
