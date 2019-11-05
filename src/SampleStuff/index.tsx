import React from "react";

import Icon from "./icon.svg";

const SampleStuff = (props: {
  title: string;
  onClick: () => void;
}): React.ReactElement<any> => (
    <div>
      <button
        style={{
          cursor: "pointer",
          alignItems: "center",
          display: "flex",
          padding: "5px",
          color: "green"
        }}
        onClick={props.onClick}
      >
        <Icon color="green" />
        {props.title}
      </button>
    </div>
  );

export default SampleStuff;
