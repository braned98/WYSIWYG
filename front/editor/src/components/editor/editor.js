import React, { useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import './editor.css';

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

function Editor() {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <div className="editor">
      <Slate editor={editor} value={initialValue}>
        <Editable />
      </Slate>
    </div>
  );
}

export default Editor;
