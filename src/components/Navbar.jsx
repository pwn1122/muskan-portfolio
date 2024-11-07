import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [color, setColor] = useState(true);
  function abc() {
    console.log(color);
    console.log("hello");
    setColor(!color);
  }
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <img src="/short-logo.png" alt="" />
        </div>
        <div className="Navbarlinks">
          {/* <NavLink to={"/about"}>about</NavLink> */}
          <a href="#about">About</a>
          <a href="#proj" id="">
            Project
          </a>
          <a href="#skill">Skills</a>
         
          <a href="#contact">Contact</a>
          
          <Link to={"blog"}>Blog</Link>
          {color == true ? (
            <img
              onClick={abc}
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/FFFFFF/menu--v7.png"
              alt="menu--v7"
            />
          ) : (
            <img
              onClick={abc}
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/x.png"
              alt="x"
            />
          )}
        </div>
      </div>

      <div className={color ? "check" : "Navbarlinksmobileview"}>
        <a href="#about">About</a>
        <a href="#proj" id="">
          Project
        </a>
        <a href="#contact">Contact</a>
        <a href="#skill">Skill</a>
        <Link to={"blog"}>Blog</Link>
        {/* <div className="icons">
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
            onClick={abc}
            width="50"
            height="50"
            src="https://img.
            8.com/ios-filled/50/FFFFFF/x.png"
            alt="x"
            />
            </Link>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
