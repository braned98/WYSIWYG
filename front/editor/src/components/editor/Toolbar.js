import React, { version, useMemo } from "react";
import ToolbarButton from "../UI/ToolbarButton";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaSave,
  FaFilePdf,
} from "react-icons/fa";

import Select from "react-select";
import "./react-select.css";

import "./Toolbar.css";
import SaveButton from "../UI/SaveButton";
import PdfButton from "../UI/PdfButton";

import axios from 'axios';

const CHARACTER_STYLES = ["bold", "italic", "underline"];

const Toolbar = (props) => {
  const versions = [];

  const currentVersion = useMemo(() => {
    if (localStorage.getItem("currentVersion")) {
      for (
        let i = localStorage.getItem("currentVersion");
        i > 0.0;
        i = (i - 0.1).toFixed(1)
      ) {
        const obj = {
            value: i,
            label: `v${i.toString()}`
        }
        versions.push(obj);
      }

      return {
        value: localStorage.getItem("currentVersion"),
        label: `v${localStorage.getItem("currentVersion").toString()}`,
      };
    } else {
      return { value: 0.1, label: "v0.1" };
    }
  }, []);

  const changeHandler = (prop) => {
    localStorage.setItem("currentVersion", prop.value);

    

  };

  return (
    <div className="toolbar">
      {CHARACTER_STYLES.map((style) => (
        <ToolbarButton
          key={style}
          style={style}
          icon={getIconForButton(style)}
        ></ToolbarButton>
      ))}
      <SaveButton style="save" icon={getIconForButton("save")}></SaveButton>
      <PdfButton style="pdf" icon={getIconForButton("pdf")}></PdfButton>
      <Select
        className="react-select-container"
        name="version"
        options={versions}
        defaultValue={currentVersion}
        onChange={changeHandler}
      ></Select>
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
    case "pdf":
      return <FaFilePdf />;
    default:
      throw new Error("Unkown style");
  }
}
