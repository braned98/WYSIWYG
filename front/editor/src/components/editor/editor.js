import React, { useState, useCallback } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import './editor.css';
import useSelection  from '../../hooks/use-selection';
import Toolbar from "./Toolbar";
import useEditorConfig from "../../hooks/use-editor-config";



function Editor({document, onChange}) {
  const [editor] = useState(() => withReact(createEditor()));

  const {renderLeaf, KeyBindings} = useEditorConfig(editor);

  const [selection, setSelection] = useSelection(editor);

  const onChangeHandler = useCallback(
    (doc) => {
        onChange(doc);
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
