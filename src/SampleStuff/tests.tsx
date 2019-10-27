import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import SampleStuff from ".";

describe("SampleStuff", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(<SampleStuff title="FooBar" onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should process clicks correctly", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<SampleStuff title="FooBar" onClick={onClick} />);
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
