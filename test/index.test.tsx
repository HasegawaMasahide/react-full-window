import { shallow } from "enzyme";
import React from "react";

import FullWindow from "../src";

test("component should be render", () => {
    const fw = shallow(<FullWindow />);

    // Interaction demo
    expect(fw.text()).toEqual("");
    expect(fw.find(".react-full-window")).toBeTruthy();

    // Snapshot demo
    expect(fw).toMatchSnapshot();
});
