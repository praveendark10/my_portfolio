import React from "react";
import { Link } from "react-router-dom";

import "../style/Underconstruction.scss";

import { GoHome } from "react-icons/go";

export default function Underconstruction() {
  window.scrollBy(150, 150);
  return (
    <>
      <div id="undercons-page">
        <h1>This Page is Under Construction</h1>
        <button>
          <Link to="/">
            Home
            <span>
              <GoHome />
            </span>
          </Link>
        </button>
      </div>
    </>
  );
}
