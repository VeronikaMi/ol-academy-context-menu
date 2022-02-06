import React, { useState } from "react";
import Submenu from "./submenu";
import "./menu.scss";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [textMenu, setTextMenu] = useState("");

  const handleRightClick = (event) => {
    event.preventDefault();
    setTextMenu(event.target.innerText);
    setShowMenu(true);
  };

  const handleClick = (close) => {
    if (!close) {
      setShowMenu(false);
    }
  };

  return (
    <div className="menu">
      <ul>
        <li id="first" onContextMenu={(e) => handleRightClick(e)}>
          First
        </li>
        <li id="second" onContextMenu={(e) => handleRightClick(e)}>
          Second
        </li>
      </ul>
      {showMenu && (
        <Submenu text={textMenu} handleClick={(close) => handleClick(close)} />
      )}
    </div>
  );
}

export default Menu;
