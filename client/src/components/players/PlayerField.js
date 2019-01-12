import React from "react";

export default ({ input, label, className, meta: { error, touched } }) => {
  return (
    <div className={className}>
      <label style={{ visibility: { touched } }}>{label}</label>
      <input
        type="text"
        {...input}
        style={{ marginBottom: "15px", color: "white" }}
      />
      <div style={{ color: "red", visibility: { error } }}>
        {touched && error}
      </div>
    </div>
  );
};
