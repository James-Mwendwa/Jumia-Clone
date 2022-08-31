import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <img
          src="https://1000logos.net/wp-content/uploads/2022/02/Jumia-Logo.png"
          alt="logo"
          className="header-icon"
        />

        <div className="footerTopRight">
          <div className="footerNewsletter">
            <h2>NEW TO JUMIA</h2>
            <p>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>

            <div className="footerInput">
              <input type="text" placeholder="Enter Email Address" />
              <button>MALE</button>
              <button>FEMALE</button>
            </div>
          </div>

          <div className="footerSocials">
            <div className="jumiaApp">
              <img
                src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw"
                alt=""
                className="appIcon"
              />
              <div className="jumiaAppDesc">
                <h2>DOWNLOAD JUMIA FREE APP</h2>
                <p>Get access to exclusive offers!</p>
              </div>
            </div>
            <div className="appStores">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVo7Z0tGlHn7wbZWlMZdB_JhkCQxSoUGN_fLoh3wH-Jx_sGspzFyEEtcAjrH5FtR992I&usqp=CAU"
                alt=""
              />

              <img
                src="https://static.vecteezy.com/system/resources/previews/002/520/833/original/download-app-button-google-play-store-graphics-free-vector.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
