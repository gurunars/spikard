import React from "react";
import renderer from "react-test-renderer";

import SampleStuff from ".";

describe("SampleStuff", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SampleStuff title="FooBar" onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
