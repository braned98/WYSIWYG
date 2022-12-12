import React from "react";

import "./ToolbarButton.css";

const ToolbarButton = (props) => {
  const { icon, isActive, ...otherProps } = props;
  return (
      <button className="toolbarButton" active={isActive.toString()}>
        {icon}
      </button>
  );
};

export default ToolbarButton;