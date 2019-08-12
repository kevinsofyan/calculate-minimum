import React from "react";
import CalculateMinimum from "../components/CalculateMinimum/CalculateMinimum";
import mockFraction from "./mockFraction";
import { shallow } from "enzyme";

describe("CalculateMinimum", () => {
    let {component,numberInput,form} = {};

     beforeAll(() => {
        component =  shallow(<CalculateMinimum/>);
        numberInput = component.find('.input-number');
        form = component.find('.form-calculate');
    });

    it('should render component correctly', () => {
        expect(component.exists('.calculate-minimum')).toEqual(true);
    });

    it('should error when submiting empty amount', () => {
        numberInput.simulate('change', {target: {value: ''}});
        form.simulate('submit', { preventDefault () {} });
        const errorMessage = component.find('.input-error');
        expect(errorMessage.text()).toEqual('Input Must be Filled');
    });

    it('should error when submiting amount with \',\' as separator', () => {
        const number = "17,500";
        numberInput.simulate('change', {target: {value: number }});
        form.simulate('submit', { preventDefault () {} });
        const errorMessage = component.find('.input-error');
        expect(errorMessage.text()).toEqual('Format is incorrect');
    });

    it('should error when submiting amount with \` \` as separator', () => {
        const number = "2 500";
        numberInput.simulate('change', {target: {value: number }});
        form.simulate('submit', { preventDefault () {} });
        const errorMessage = component.find('.input-error');
        expect(errorMessage.text()).toEqual('Format is incorrect');
    });

    it('should error when submiting amount with valid character but in wrong position', () => {
        const number = "3000 Rp";
        numberInput.simulate('change', {target: {value: number }});
        form.simulate('submit', { preventDefault () {} });
        const errorMessage = component.find('.input-error');
        expect(errorMessage.text()).toEqual('Format is incorrect');
    });

    it('should successfully calculate minimum number needed to make inputed amount', () => {
        let number = ["Rp 15000","3900","Rp 12510"];
        for (let i=0;i<number.length;i++){
            numberInput.simulate('change', {target: {value: number[i] }});
            form.simulate('submit', { preventDefault () {} });
            expect(component.state().fraction).toEqual(mockFraction[`sample${i+1}`]);
        }
    });
})



