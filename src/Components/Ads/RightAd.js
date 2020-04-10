import React from "react";

function RightAdd() {
  return (
    <div
      style={{
        position: "fixed",
        right: 10,
        top: "18%",
        height: "75%",
        width: "13%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px dashed blue",
      }}
      className="white hide-on-med-and-down"
    >
      <div style={{ fontWeight: "bold" }}>Iklan disini</div>
    </div>
  );
}

export default RightAdd;
