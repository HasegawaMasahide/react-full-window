import { shallow } from "enzyme";
import React from "react";

import FullWindow from "../src";

describe("simple rendering", () => {
    test("component should be render", () => {
        const fw = shallow(<FullWindow />);

        expect(fw.text()).toEqual("");
        expect(fw.find(".react-full-window")).toBeTruthy();
        expect(fw).toMatchSnapshot();
    });

    test("component has child of text", () => {
        const fw = shallow(<FullWindow>some_text</FullWindow>);

        expect(fw.text()).toEqual("some_text");
        expect(fw).toMatchSnapshot();
    });

    test("component has child of html element", () => {
        const fw = shallow(
            <FullWindow>
                <p>some_paragraph</p>
            </FullWindow>
        );

        expect(fw.text()).toEqual("some_paragraph");
        expect(fw.find("p")).toHaveLength(1);
        expect(fw).toMatchSnapshot();
    });
});
