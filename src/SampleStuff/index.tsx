import React from "react";

const SampleStuff = (props: {
  title: string,
  onClick: () => void
}): React.ReactElement<any> => (
    <button
      style={{
        cursor: "pointer"
      }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );

export default SampleStuff;
