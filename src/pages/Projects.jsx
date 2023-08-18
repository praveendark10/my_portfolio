import React from "react";

import { myDev } from "./Data";

import "../style/Project.scss";

export default function Projects() {
  return (
    <>
      <div id="project-page">
        {/* <div className="container-fluid"> */}
        <ul>
          {myDev.map((items) => {
            return (
              <li>
                <img src={items.image} alt={items.title} title={items.title} />
                <a href={items.url} title={items.url} target="blank">
                  <h4> {items.title}</h4>
                </a>
                <h6 title={items.type}>{items.type}</h6>
              </li>
            );
          })}
        </ul>
        {/* </div> */}
      </div>
    </>
  );
}
