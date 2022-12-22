import { Editor } from "slate";



export function getActiveStyles(editor) {                      //set of active styles in the editor
    //console.log("tu sam - active")    
    return new Set(Object.keys(Editor.marks(editor) ?? {}));  //if null then {}
}

export function toggleStyle(editor, style){                  //toggle style on the editor function
    const activeStyles = getActiveStyles(editor);

    //console.log('tu sam');

    if(activeStyles.has(style)){
        Editor.removeMark(editor, style);
    }else {
        Editor.addMark(editor, style, true);
    }

}











