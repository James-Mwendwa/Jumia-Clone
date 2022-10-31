import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Login from "./Login";

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2022/02/Jumia-Logo.png"
          alt="logo"
          className="header-icon"
        />
      </Link>

      <div className="header-center">
        <div className="header-centerInput">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search products, brands and categories"
          />
        </div>

        <button>SEARCH</button>
      </div>

      <div className="header-rightAccount">
        <PersonOutlineIcon />
        <h2>Account</h2>
        <button onClick={(e) => setIsActive(!isActive)}>
          {isActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
        {isActive && (
          <div className="signIn">
            <Login />
          </div>
        )}
      </div>

      <div className="header-rightHelp">
        <HelpOutlineOutlinedIcon />
        <h2>Help</h2>
        <ExpandMoreIcon />
      </div>

      <div className="header-rightCart">
        <ShoppingCartOutlinedIcon />
        <Link to="/cart">
          <h2>Cart</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
