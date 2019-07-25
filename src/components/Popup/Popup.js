import React from "react";

function Popup(props) {
  console.log("Popup", props);

  return (
    <div
    //   style={{
    //     background: "rgba(0, 0, 0, 0.7)",
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     width: "100vw",
    //     height: "100vh"
    //   }}
    >
      <div
        style={{
          position: "absolute",
          width: "10%",
          top: props.top,
          height: "30vh",
          right: "30px",
          border: "1px solid",
          background: "antiquewhite"
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default React.memo(Popup);
