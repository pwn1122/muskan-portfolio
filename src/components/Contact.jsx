import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      <div className="contactmain" id="contact">
        <div className="contact">
          <h1>
            Contact / <span> Hire me</span>
          </h1>
          <input type="email" name="" id="" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" rows="9" placeholder="Message "></textarea>
          <button>SEND</button>
        </div>
        <div className="contacticon">
          <span>Or you can follow me here</span>
          <div className="contacticons">
            {" "}
            <Link to={"https://github.com/dhananjaymonga"}>
          <img
            width="60"
            height="60"
            src="https://img.icons8.com/ios-glyphs/60/FFFFFF/github.png"
            alt="github"
            />
            </Link>
            <Link to={"https://www.linkedin.com/in/dhananjay-monga-2619342a4"}>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/FFFFFF/linkedin--v1.png"
            alt="linkedin--v1"
            />
            </Link>
            <Link to={"https://x.com/MongaDhananjay?t=iNZkiMSmRjSMlCIt5UGcTA&s=09"}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/x.png"
            alt="x"
            />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="hars">
        <span>Dhananjay © 2024 | Made with love using React and CSS</span>
      </div>
    </div>
  );
}

export default Contact;
