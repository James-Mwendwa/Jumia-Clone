import React from "react";
import "./HomeSlider.css";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function HomeSlider() {
  return (
    <div className="homeSlides">
      <KeyboardArrowLeftIcon className="sliderIcon" />
      <img src="images/Smartphones.png" alt="smartphones" />
      <img src="images/Small-Appliances.png" alt="" />
      <img src="images/Women's-Fashion.png" alt="" />
      <img src="images/Televisions.png" alt="" />
      <img src="images/Beauty-Products.png" alt="" />
      <img src="images/Clearance-sale.png" alt="" />
      <img src="images/Flash-sale.png" alt="" />
      <img src="images/Supermarket.png" alt="half" />
      <KeyboardArrowRightIcon className="sliderIcon" />
    </div>
  );
}

export default HomeSlider;
