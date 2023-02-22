import "./App.css";
import Banner from "./Components/Banner";
import BestSeller from "./Components/BestSeller";
import Know_The_Licious_Way from "./Components/Know_The_Licious_Way";
import Navbar from "./Components/Navbar";
import RedBox from "./Components/RedBox";
import ShopByCategoiries from "./Components/ShopByCategoiries";
import YellowBox from "./Components/YellowBox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ShopByCategoiries
        heading="Shop by categories"
        subheading="Freshest meats just for you"
      />
      <YellowBox />
      <Know_The_Licious_Way />
      <BestSeller heading="Best Seller" />
      <BestSeller heading="Boneless Cuts" />
      <RedBox />
      <ShopByCategoiries heading="Explore  by categories" />
      <BestSeller heading="Breakfast & Snacking Specials" />
    </div>
  );
}

export default App;
