import React from "react";
import "./App.css";

import Channel from "./Components/Channel";
import Menubar from "./Components/Menubar";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Channel />
    </div>
  );
}

export default App;
