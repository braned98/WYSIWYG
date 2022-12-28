import React from "react";
import { useEditor } from "slate-react";
import { toggleStyle } from "../../utlis/EditorUtils";

import "./ToolbarButton.css";



const ToolbarButton = (props) => {
  const { icon, style} = props;
  const editor = useEditor();


  return (
    <button
      className="toolbarButton"
      onMouseDown={(event) => {
        //console.log("onMouseDown")
        event.preventDefault();
        toggleStyle(editor, style);
      }}
    >
      {icon}
    </button>
  );
};

export default ToolbarButton;


