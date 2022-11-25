import React from "react";
import "./App.scss";
import Badge from "./components/Badge";
import LinkArrow from "./components/LinkArrow";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        atque magni numquam, natus perspiciatis alias aut, hic, odio porro eaque
        similique est aliquam doloribus blanditiis modi quaerat dolore dolores
        eius!
      </p>
      <LinkArrow linkPath="#" />
      <Badge theme="badge--secondary--small" text="10% Off" />
    </>
  );
}

export default App;
