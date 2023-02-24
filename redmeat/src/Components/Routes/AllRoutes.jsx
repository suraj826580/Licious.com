import Navbar from "../Navbar";
import Banner from "../Banner";
import ShopByCategoiries from "../ShopByCategoiries";
import YellowBox from "../YellowBox";
import Know_The_Licious_Way from "../Know_The_Licious_Way";
import BestSeller from "../Best_Seller_Carousel/BestSeller";
import Boneless from "../BoneLess_Cuts/BoneLessCuts";
import RedBox from "../RedBox";
import React from "react";
import BreakFastAndSnacking from "../BreakFast_and_Snacking_Special/BreakFastAndSnackingSpecial";
import Blog from "../Blog/Blog";
import BottomBanner from "../BottomBanner";
import Footer from "../Footer/Footer";

import { Routes, Route } from "react-router-dom";
import DrawerLoginAndSignUp from "../LoginAndSignUpDrawer.jsx/Drawer";
import ChickenProducts from "../ChickenPoducts/ChickenProducts";
import PageNotFound from "../PageNotFound";
import FishAndSeeDFood from "../ChickenPoducts/FishAndSeedFood";
import Mutton from "../ChickenPoducts/Mutton";
import MArinades from "../ChickenPoducts/Marinades";
import Prawns from "../ChickenPoducts/Prawns";
import Breakfast from "../ChickenPoducts/breakfast";

export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
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
            <Footer />
            <DrawerLoginAndSignUp />
          </div>
        }></Route>
      <Route
        path="/chicken"
        element={
          <>
            <Navbar />
            <ChickenProducts />
            <DrawerLoginAndSignUp />
            <Footer />
          </>
        }></Route>
      <Route
        path="fishAndSeaFood"
        element={
          <>
            <Navbar />
            <FishAndSeeDFood />
            <DrawerLoginAndSignUp />
            <Footer />
          </>
        }></Route>
      <Route
        path="mutton"
        element={
          <>
            <Navbar />
            <Mutton />
            <DrawerLoginAndSignUp />
            <Footer />
          </>
        }></Route>
      <Route
        path="marinades"
        element={
          <>
            <Navbar />
            <MArinades />
            <DrawerLoginAndSignUp />
            <Footer />
          </>
        }></Route>
      <Route
        path="prawns"
        element={
          <>
            <Navbar />
            <Prawns />
            <DrawerLoginAndSignUp />
            <Footer />
          </>
        }></Route>
      <Route
        path="breakfast"
        element={
          <>
            <Navbar />
            <Breakfast />
            <DrawerLoginAndSignUp />
            <Footer />
          </>
        }></Route>
      <Route
        path="*"
        element={
          <>
            <PageNotFound />
          </>
        }></Route>
    </Routes>
  );
}
