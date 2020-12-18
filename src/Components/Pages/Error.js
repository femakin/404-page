import React from "react";
import Scarecrow from "../Assets/Images/Scarecrow.png";

export default function error() {
  return (
    <div>
      <div className="container">
        <div className="container__Navbar">
          <h1>404 NOT FOUND</h1>
        </div>
        <div className="container__info">
          <div className="container__image">
            <img
              src={Scarecrow}
              alt="Avatar_Scarecrow"
              className="image__content"
            />
          </div>
          <div className="container__text">
            <h2>I have bad news for you</h2>
            <p>
              The page you are looking for might be removed or is temporarily
              unaviable
            </p>
            <button type="button" className="btn">
              <a href="/" className="button_text">
                Back to homepage
              </a>
            </button>
          </div>
        </div>
        <footer>
          <a href="https://github.com/femakin" className="footer_item">
            Femi
          </a>
          @
          <a href="https://devchallenges.io" className="footer_item">
            Devchallenges{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
