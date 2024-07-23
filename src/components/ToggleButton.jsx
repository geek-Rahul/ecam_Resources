import React from "react";
import "./ToggleButton.css"
const ToggleButton = ({ setVideo, handleSetVideo }) => {
  return (
    <label className="switch-button" htmlFor="switch">
      <div className="switch-outer">
        <input id="switch" type="checkbox" onChange={handleSetVideo} />
        <div className="button">
          <span className="button-toggle"></span>
          <span className="button-indicator"></span>
        </div>
      </div>
    </label>
  );
};

export default ToggleButton;
