import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function Header() {
  return (
    <div className="header">
      <img
        src="https://1000logos.net/wp-content/uploads/2022/02/Jumia-Logo.png"
        alt="logo"
        className="header-icon"
      />

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
        <ExpandMoreIcon />
      </div>

      <div className="header-rightHelp">
        <HelpOutlineOutlinedIcon />
        <h2>Help</h2>
        <ExpandMoreIcon />
      </div>

      <div className="header-rightCart">
        <ShoppingCartOutlinedIcon />
        <h2>Cart</h2>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Header;
