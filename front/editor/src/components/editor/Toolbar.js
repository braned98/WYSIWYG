import React, { version, useMemo, useState } from "react";
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

import axios from "axios";

import { useDispatch} from "react-redux";
import { routerActions } from "../../store";

const CHARACTER_STYLES = ["bold", "italic", "underline"];

const Toolbar = (props) => {
  const versions = [];

  const dispatch = useDispatch();


  const currentVersion = useMemo(() => {
    if (localStorage.getItem("currentVersion")) {
      for (
        let i = localStorage.getItem("maxVersion");
        i > 0.0;
        i = (i - 0.1).toFixed(1)
      ) {
        const obj = {
          value: i,
          label: `v${i.toString()}`,
        };
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

    console.log(prop.value);

    const documentData = {
      id: localStorage.getItem("currentDocument"),
      versionTag: prop.value,
    };

    console.log(documentData);

    const headers = {
      "Content-type": "application/json",
      Accept: "application/json",
    };

    axios
      .post("http://localhost:7127/getVersion", JSON.stringify(documentData), {
        headers,
      })
      .then((res) => {
        console.log(res.data.documentContent);
        localStorage.setItem("docContent", res.data.documentContent);
        console.log(localStorage.getItem("docContent"))
        dispatch(routerActions.updateRoute('Document'));

      })
      .catch((err) => {
        console.log(err);
      });
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
