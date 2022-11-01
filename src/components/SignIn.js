import React, { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(email);
  };

  return (
    <div className="signInCard">
      <img src="images/unnamed.png" alt="logo" className="header-icon" />
      <div className="desc">
        <h2>What's your email address?</h2>
        <p>Type your email to log in or create a Jumia account.</p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>SIGN IN</button>
        </form>
      </div>

      <button>You have an account ? Log in</button>

      <div className="bottomCard">
        <img
          src="https://1000logos.net/wp-content/uploads/2022/02/Jumia-Logo.png"
          alt="logo"
          className="header-icon"
        />
      </div>
    </div>
  );
}

export default SignIn;
