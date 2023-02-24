import "./App.css";
import Banner from "./Components/Banner";
import BestSeller from "./Components/Best_Seller_Carousel/BestSeller";
import Blog from "./Components/Blog/Blog";
import Boneless from "./Components/BoneLess_Cuts/BoneLessCuts";
import BottomBanner from "./Components/BottomBanner";
import BreakFastAndSnacking from "./Components/BreakFast_and_Snacking_Special/BreakFastAndSnackingSpecial";
import Footer from "./Components/Footer/Footer";
import Know_The_Licious_Way from "./Components/Know_The_Licious_Way";
import MadeWithCarousel from "./Components/MadeWithLiciousCarousel.jsx/MadeWithCarousel";
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
      <Boneless heading="Boneless Cuts" />
      <RedBox />
      <ShopByCategoiries heading="Explore  by categories" />
      <BreakFastAndSnacking heading="Breakfast & Snacking Specials" />
      <Blog heading="Check Out Our blog" />
      <BottomBanner />
      {/* <MadeWithCarousel /> */}
      <Footer />
    </div>
  );
}

export default App;
