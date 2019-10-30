import React from "react";

import { ReactComponent as Icon } from "./icon.svg";

const SampleStuff = (props: {
  title: string,
  onClick: () => void
}): React.ReactElement<any> => (
    <div>
      <Icon />

      <button
        style={{
          cursor: "pointer"
        }}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );

export default SampleStuff;
