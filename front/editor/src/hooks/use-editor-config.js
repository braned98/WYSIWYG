import React from "react";

import StyledText from "../components/editor/StyledText";
import { toggleStyle } from "../utlis/EditorUtils";
import isHotkey from "is-hotkey";


export default function useEditorConfig(editor) {

    return {renderLeaf, KeyBindings};
  }

  
  function renderLeaf(props) {
    return <StyledText {...props} />;
  }

  const KeyBindings = {
    onKeyDown: (editor, event) => {
      if (isHotkey("mod+b", event)) {
        toggleStyle(editor, "bold");
        return;
      }
      if (isHotkey("mod+i", event)) {
        toggleStyle(editor, "italic");
        return;
      }
      if (isHotkey("mod+c", event)) {
        toggleStyle(editor, "code");
        return;
      }
      if (isHotkey("mod+u", event)) {
        toggleStyle(editor, "underline");
        return;
      }
    },
  };
  