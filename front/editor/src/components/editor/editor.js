import React, { useState, useCallback, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import "./editor.css";
import useSelection from "../../hooks/use-selection";
import Toolbar from "./Toolbar";
import useEditorConfig from "../../hooks/use-editor-config";

function Editor({ editorKey, setEditorKey, initialDocument, onChange }) {
  const [version, setVersion] = useState(
    localStorage.getItem("currentVersion") || 0.1
  );

  const [key, setKey] = useState(1);

  const [editor] = useState(() => withReact(createEditor()));

  const { renderLeaf, KeyBindings } = useEditorConfig(editor);

  const [selection, setSelection] = useSelection(editor);

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
  });

  const onChangeHandler = useCallback(
    (doc) => {
      //console.log("ovo je promena");
      //console.log(doc);
      onChange(doc);
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
      <Slate
        key={key}
        editor={editor}
        value={document}
        onChange={onChangeHandler}
      >
        <Toolbar
          editorKey={editorKey}
          setEditorKey={setEditorKey}
          slateKey={key}
          setKey={setKey}
          selection={selection}
          setVersion={setVersion}
        />
        <Editable renderLeaf={renderLeaf} onKeyDown={onKeyDown} />
      </Slate>
    </div>
  );
}

export default Editor;
