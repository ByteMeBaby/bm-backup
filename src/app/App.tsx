import "./App.css";
import { Button } from "../lib/components/button";
import React from "react";

function App() {
  function handleClick() {
    console.log("click");
  }
  return (
    <>
      <Button disabled onClick={handleClick}>
        click
      </Button>
    </>
  );
}

export default App;
