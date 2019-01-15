import React from "react";

export default ({
  label,
  elementType,
  elementConfig,
  className,
  meta: { error, touched }
}) => {
  let inputElement = null;
  switch (elementType) {
    case "input":
      inputElement = (
        <input
          {...elementConfig}
          style={{ marginBottom: "15px", color: "white" }}
        />
      );
      break;
    case "select":
      inputElement = (
        <select>
          {elementConfig.options.map(option => (
            <option value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      break;
  }

  return (
    <div className={className}>
      <label style={{ visibility: { touched } }}>{label}</label>
      {inputElement}
      <div style={{ color: "red", visibility: { error } }}>
        {touched && error}
      </div>
    </div>
  );
};
