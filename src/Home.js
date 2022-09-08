import "./Home.css";
import HomeSlider from "./HomeSlider";
import MenuSidebar from "./MenuSidebar";

function Home() {
  return (
    <div className="home">
      <MenuSidebar />
      <HomeSlider />
    </div>
  );
}

export default Home;
