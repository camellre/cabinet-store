import React from "react";
import "./App.scss";
import FeatureBar from "./components/FeatureBar";
import HomePageFooter from "./components/HomePageFooter";
import HomePageGrid from "./components/HomePageGrid";
import NavBar from "./components/NavBar";
import PromotionBar from "./components/PromotionBar";

function App() {
  return (
    <>
      <NavBar />
      <PromotionBar />
      <FeatureBar />
      <HomePageGrid />
      <HomePageFooter />
    </>
  );
}

export default App;
