import React from "react";
import "./App.css";
import Greeter from "./components/Greeter";

function App() {
  return (
    <div className="App">
      <Greeter person="Candy"/>
      <Greeter person="Yong Min"/>
      <Greeter person="Mongja"/>
    </div>
  );
}

export default App;
