import React from "react";

export default ({ input, label, size, meta: { error, touched } }) => {
  return (
    <div className={size}>
      <input
        type="text"
        {...input}
        style={{ marginBottom: "5px", color: "white" }}
      />
      <div style={{ color: "red", visibility: { error } }}>
        {touched && error}
      </div>
      <label style={{ visibility: { touched } }}>{label}</label>
    </div>
  );
};
