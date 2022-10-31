import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="signInContainer">
      <div className="button">
        <Link to="/signin">
          <button>SIGN IN</button>
        </Link>
      </div>
      <div className="underline"></div>
      <div className="bottom">
        <div className="bottomItem">
          <PersonOutlineIcon />
          <p>My Account</p>
        </div>
        <div className="bottomItem">
          <ShoppingBagOutlinedIcon />
          <p>Orders</p>
        </div>
        <div className="bottomItem">
          <FavoriteBorderIcon />
          <p>Saved Items</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
