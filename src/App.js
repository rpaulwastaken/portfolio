import React from "react";
import Navbar from "./components/navbar";
import IBox from "./components/intro_box";
import IText from "./components/intro_text";
import Avatar from "./components/avatar";
import Skills from "./components/skills";
import OtherProjects from "./components/otherprojects";
import "./App.css";

function App() {
  return (
      <>
          <div className={"bgColor"} />
          <div> <Navbar/> </div>
          <div> <Avatar /></div>
          <div> <IText /></div>
          <div> <IBox /></div>
          <div> <Skills /></div>
          <div> <OtherProjects /></div>
      </>
  );
}

export default App;