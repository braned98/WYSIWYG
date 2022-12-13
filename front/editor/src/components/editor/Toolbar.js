import React from "react";
import ToolbarButton from "../UI/ToolbarButton";
import { FaBold, FaItalic, FaUnderline, FaSave } from "react-icons/fa";


import "./Toolbar.css";

const CHARACTER_STYLES = ["bold", "italic", "underline", "save"];

const Toolbar = (props) => {

  return (
    <div className="toolbar">
      {CHARACTER_STYLES.map((style) => (
        <ToolbarButton
          key={style}
          style={style}
          icon={getIconForButton(style)}          
        ></ToolbarButton>
      ))}
    </div>
  );
};

export default Toolbar;

function getIconForButton(style) {
    switch (style) {
      case "bold":
        return <FaBold />;
      case "italic":
        return <FaItalic />;
      case "underline":
        return <FaUnderline />;
      case "save":
        return <FaSave />;
      default:
        throw new Error("Unkown style");
    }
  }
