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
          <form
            action="https://formsubmit.co/dhillonsonu427@gmail.com"
            method="POST" target="blank"
          >
            <input type="text" placeholder="name" name="name" required />
            <input type="email" name="email" required placeholder="Email" />
            <textarea
              name="message"
              required
              id=""
              rows="9"
              placeholder="Message"
            ></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
        <div className="contacticon">
          <span>Or you can follow me here</span>
          <div className="contacticons">
            {" "}
            <Link to={"https://www.instagram.com/design_dynamo_00?igsh=cDczZXdiamxzenhz"}>
              <img
                width="24"
                height="24"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpX91rfGtggSDFm-x1VS3GdRLSntDDwO0mxQ&s"
                alt="linkedin--v1"
              />
            </Link>

          </div>
        </div>
      </div>
      <hr />
      <div className="hars">
        <span>Sonu Dhillon © 2024 | Made with love using React and CSS</span>
      </div>
    </div>
  );
}

export default Contact;
