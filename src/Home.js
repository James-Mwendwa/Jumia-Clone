import "./Home.css";
import HomeSlider from "./HomeSlider";
import MenuSidebar from "./MenuSidebar";
import TopSelling from "./TopSelling";

function Home() {
  return (
    <div className="home">
      <MenuSidebar />
      <HomeSlider />
      <TopSelling />
    </div>
  );
}

export default Home;
