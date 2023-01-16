import React from "react";
import "./App.scss";
import Button from "./commoncomponents/Button";
import Icon from "./commoncomponents/Icon";
import FeatureBar from "./components/FeatureBar";
import HomePageFooter from "./components/HomePageFooter";
import HomePageGrid from "./components/HomePageGrid";
import NavBar from "./components/NavBar";
import PromotionBar from "./components/PromotionBar";
import { ReactComponent as Home } from "./images/home.svg";

function App() {
  return (
    <>
      <NavBar />
      <PromotionBar />
      <FeatureBar />
      <HomePageGrid />
      <HomePageFooter />
      <Button theme={"navBarButton"} text={"Sign Up"} />
      <Icon IconImage={Home} />
    </>
  );
}

export default App;
