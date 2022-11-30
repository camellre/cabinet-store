import React from "react";
import "./App.scss";
import Button from "./components/Button";
import Card from "./components/Card";
import Grid from "./components/Grid";
import Icon from "./components/Icon";
import Input from "./components/Input";
import List from "./components/List";
import MediaObject from "./components/MediaObject";

interface ListItem {
  id: string;
  text: string;
}

function App() {
  const listItem: ListItem[] = [
    {
      id: "1",
      text: "Item 1",
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
      <List
        items={listItem}
        keyExtractor={({ id }: ListItem) => id}
        itemExtractor={({ text }: ListItem) => text}
        onItemSelected={handleItemSelect}
        selectedItem={selectedListItem}
        listStyle="list"
      />
      <Grid />
    </>
  );
}

export default App;
