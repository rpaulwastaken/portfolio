import React from "react";
import Navbar from "./components/navbar";
import IBox from "./components/intro_box";
import IText from "./components/intro_text";
import Avatar from "./components/avatar";
import "./App.css";

function App() {
  return (
      <>
          <div className={"bgColor"} />
          <div> <Avatar /></div>
          <div> <IText /></div>
          <div> <IBox /></div>
          <div> <Navbar/> </div>
      </>
  );
}

export default App;