import React from "react";
import Result from "../components/CalculateMinimum/Result";
import mockFraction from "./mockFraction"
import { shallow } from "enzyme";

describe("Result", () => {
    let {component} = {};
    beforeAll(() => {
        component = shallow(<Result inputNumber={12510} fraction={mockFraction['sample3']}/>);
    });

    it('should render component correctly', () => {
        expect(component.find('.result-number').text()).toEqual("12510");
        expect(component.find('li').length).toEqual(mockFraction['sample3'].length);
    });

    it('should render result list correctly', () => {
        expect(component.find('li').at(0).text()).toEqual("1 x Rp 10000");
        expect(component.find('li').at(3).text()).toEqual("left Rp10 (no available fraction)");
    });

});
