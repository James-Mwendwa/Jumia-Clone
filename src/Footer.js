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
            <h2>NEW TO JUMIA?</h2>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4nJBnv9fctPP2IV8rc0Uh3u6XE7iHWzHETXE1_-SLbU-j-scsVJJ_JQtw5i7iNlZ_A&usqp=CAU"
                alt="appStore"
              />

              <img src="https://logodix.com/logo/858039.png" alt="googlePlay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
