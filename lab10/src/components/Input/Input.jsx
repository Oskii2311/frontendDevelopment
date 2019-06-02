import React from "react";

const Input = ({ name, value, onChange }) => {
  return (
    <label>
      {name}
      <input name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default Input;
