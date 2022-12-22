import React, { useState, useCallback, useEffect, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import "./editor.css";
import useSelection from "../../hooks/use-selection";
import Toolbar from "./Toolbar";
import useEditorConfig from "../../hooks/use-editor-config";

import { useSelector, useDispatch } from "react-redux";
import { documentActions } from "../../store/index";
import axios from "axios";
import InitialDocument from "../../utlis/InitialDocument";

function Editor({ initialDocument, onChange }) {
  const dispatch = useDispatch();

  //const document = useSelector((state) => state.document.document);

  const [editor] = useState(() => withReact(createEditor()));

  const { renderLeaf, KeyBindings } = useEditorConfig(editor);

  const [selection, setSelection] = useSelection(editor);

  //console.log(document);

  const document = useMemo(() => {
    if (localStorage.getItem("docContent")) {
      return (
        JSON.parse(localStorage.getItem("docContent")) || [
          {
            type: "paragraph",
            children: [{ text: "You can start typing!" }],
          },
        ]
      );
    } else {
      return [
        {
          type: "paragraph",
          children: [{ text: "You can start typing!" }],
        },
      ];
    }
  }, []);

  const onChangeHandler = useCallback(
    (doc) => {
      onChange(doc);
      dispatch(documentActions.updateContent(doc));
      localStorage.setItem("docContent", JSON.stringify(doc));
      setSelection(editor.selection);
    },
    [editor.selection, onChange, setSelection]
  );

  const onKeyDown = useCallback(
    (event) => KeyBindings.onKeyDown(editor, event),
    [KeyBindings, editor]
  );

  return (
    <div className="editor">
      <Slate editor={editor} value={document} onChange={onChangeHandler}>
        <Toolbar selection={selection} />
        <Editable renderLeaf={renderLeaf} onKeyDown={onKeyDown} />
      </Slate>
    </div>
  );
}

export default Editor;
