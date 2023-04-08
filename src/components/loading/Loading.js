import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Spinner
        animation="grow"
        variant="secondary"
        style={{
          height: 30,
          width: 30,
          marginLeft: 3
        }}
      />
      <Spinner
        animation="grow"
        variant="secondary"
        style={{
          height: 40,
          width: 40,
        }}
      />
      <Spinner
        animation="grow"
        variant="secondary"
        style={{
          height: 30,
          width: 30,
          marginRight: 3
        }}
      />
    </div>
  );
};

export default Loading;
