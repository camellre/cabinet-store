import React from "react";
import "./App.scss";
import FeatureBar from "./components/FeatureBar";
import HomePageFooter from "./components/HomePageFooter";
import HomePageGrid from "./components/HomePageGrid";
import NavBar from "./components/NavBar";
import PromotionBar from "./components/PromotionBar";

interface ListItem {
  id: string;
  text: string;
}

function App() {
  const listItem: ListItem[] = [
    {
      id: "1",
      text: "Item 12",
    },
    {
      id: "2",
      text: "Item 2",
    },
    {
      id: "3",
      text: "Item 3",
    },
  ];

  let selectedListItem: string | null = "Item 3";
  const handleItemSelect = () => {
    console.log("itemselected");
  };

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
