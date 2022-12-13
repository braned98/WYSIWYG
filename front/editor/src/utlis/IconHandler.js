

export function getIconForButton(style){
    switch(style){
        case "bold":
            return "FaBold";
        case "italic":
            return "FaItalic";
        case "underline":
            return "FaUnderline";
        default:
            throw new Error('Unkown style');
    }
}