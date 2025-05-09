import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">MOIZ</div>
          <div className="right">
            <p>Ashiana Road, Lahore</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>
              Developed By <a href="https://moiz.codeletdigital.com">Moiz</a>{" "}
            </p>
          </div>
          <div className="right">
            <p>
              All Rights Reserved By{" "}
              <a href="https://moiz.codeletdigital.com">Moiz</a> .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
