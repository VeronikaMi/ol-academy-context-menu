import React, { useState } from "react";
import "./Menu.scss";
import Submenu from "./Submenu";

function MenuItem(props) {
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
    <div>
      <li
        id={props.text.toLowerCase()}
        onContextMenu={(e) => handleRightClick(e)}
      >
        {props.text}
      </li>
      {showMenu && (
        <Submenu text={textMenu} handleClick={(close) => handleClick(close)} />
      )}
    </div>
  );
}

export default MenuItem;
