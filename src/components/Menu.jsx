import React from "react";
import "./Menu.scss";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <MenuItem text="First" />
        <MenuItem text="Second" />
      </ul>
    </div>
  );
}

export default Menu;
