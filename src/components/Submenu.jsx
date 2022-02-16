import React, { useRef } from "react";
import "./Submenu.scss";

function Submenu({ text, handleClick }) {
  const menu = useRef();

  const handleClickSub = (e) => {
    if (!menu.current.contains(e.target)) {
      handleClick(false);
    }
  };

  const clickEl = (el) => {
    console.log(el);
    handleClick(false);
  };

  return (
    <div
      className="overlay"
      onClick={(e) => handleClickSub(e)}
      onContextMenu={(e) => handleClickSub(e)}
    >
      <div className="submenu" ref={menu}>
        <ul>
          <li>{text}</li>
          <li
            onClick={(e) => {
              clickEl(e.target.innerText);
            }}
          >
            Edit
          </li>
          <li
            onClick={(e) => {
              clickEl(e.target.innerText);
            }}
          >
            Remove
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Submenu;
