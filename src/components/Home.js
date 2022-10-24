import "./Home.css";
import HomeSlider from "../components/HomeSlider";
import MenuSidebar from "../components/MenuSidebar";
import TopSelling from "../components/TopSelling";

function Home({ addProducts }) {
  return (
    <div className="home">
      <MenuSidebar />
      <HomeSlider />
      <TopSelling addProducts={addProducts} />
    </div>
  );
}

export default Home;
