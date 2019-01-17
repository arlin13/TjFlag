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
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      break;
  }

  return (
    <div className={className}>
      <label>{label}</label>
      {inputElement}
      <div className="red-text">{touched && error}</div>
    </div>
  );
};
