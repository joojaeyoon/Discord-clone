import React, { useEffect } from "react";
import "./App.css";

import Channel from "./Components/Channel";
import Menubar from "./Components/Menubar";

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="App">
      <Menubar />
      <Channel />
    </div>
  );
}

export default App;
