import React from "react";

function TopBanner() {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px dashed blue",
          width: "100%",
          height: "100px",
          margin: "10px 0px",
        }}
        className="white"
      >
        <div style={{ fontWeight: "bold" }}>Iklan disini</div>
      </div>
    </div>
  );
}

export default TopBanner;
