import React from "react";

import "../style/Contact.scss";

export default function Contact() {
  return (
    <>
      <div id="contact-page">
        <form action="">
          <Step_One />
        </form>
      </div>
    </>
  );
}

export function Step_One() {
  return (
    <>
      <div className="step-one-form">
        <label htmlFor="">Please Select The Reason</label>
        <select name="" id="" required>
          <option value="" selected disabled>
            Select Here...
          </option>
          <option value="Freelancing">Freelancing</option>
          <option value="Hire Me">Hire Me</option>
          <option value="I don't Know">I Don't Know</option>
        </select>
      </div>
    </>
  );
}
