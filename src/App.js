import React from "react";
import Navbar from "./components/navbar";
import IBox from "./components/intro_box";
import "./App.css";

function App() {
  return (
      <>
          <div className={"bgColor"} />
          <div> <IBox /></div>
          <div> <Navbar/> </div>
      </>
  );
}

export default App;