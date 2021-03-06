import React from "react";

const UserInput = props => {
  const inputStyle = {
    border: "2px solid black"
  };
  return (
    <input
      type="text"
      style={inputStyle}
      onChnage={props.changed}
      value={props.currentName}
    />
  );
};

export default UserInput;
