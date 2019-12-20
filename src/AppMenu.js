import React from "react";

const AppMenu = ({ electron }) => {
  const maximize = () => {
    if (!electron.remote.getCurrentWindow().isMaximized()) {
      electron.remote.getCurrentWindow().maximize();
    } else {
      electron.remote.getCurrentWindow().unmaximize();
    }
  };

  const minimize = () => {
    electron.remote.getCurrentWindow().minimize();
  };

  const closewindow = () => {
    electron.remote.getCurrentWindow().close();
  };
  return (
    <div className="Menu">
      <button className="MenuButtons" onClick={minimize}>
        −
      </button>
      <button className="MenuButtons" onClick={maximize}>
        ▢
      </button>
      <button className="MenuButtons" onClick={closewindow}>
        ✕
      </button>
    </div>
  );
};

export default AppMenu;
