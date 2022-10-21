import "./Home.css";
import HomeSlider from "../components/HomeSlider";
import MenuSidebar from "../components/MenuSidebar";
import TopSelling from "../components/TopSelling";

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
