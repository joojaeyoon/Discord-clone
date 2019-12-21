import React, { useState, useEffect } from "react";

import title from "./discord-title.png";
import "./App.css";

import AppMenu from "./AppMenu";
import Channel from "./Components/Channel";
import Menubar from "./Components/Menubar";

function App() {
  //const [electron]=useState(window.require('electron'))
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div>
      <div className="titlebar">
        <img className="title" src={title} alt="title" />
        {/*<AppMenu electron={electron} />*/}
      </div>
      <div className="App">
        <Menubar />
        <Channel />
      </div>
    </div>
  );
}

export default App;
