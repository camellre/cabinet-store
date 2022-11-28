import React from "react";
import "./App.scss";
import Button from "./components/Button";
import Icon from "./components/Icon";
import List from "./components/List";

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
      <Icon />
      <Button theme="btn--secondary" blockButton={false} />
    </>
  );
}

export default App;
