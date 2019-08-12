import React, {Component} from 'react';
import numberValidator from "./numberValidator";
import {calculateFraction} from "./calculateFraction";
import Result from "./Result";

export default class CalculateMinimum extends Component {

    state = {
        error: {},
        inputNumber: "",
        fraction: []
    }
    doClearFraction() {
        this.setState({fraction: [], inputNumber: ""})
    }

    doInputChange = (event) => {
        this.setState({inputNumber: event.target.value})
    };

    doFormatNumber(number) {
        const inputedNumber = number.split(",")[0];
        const formatedNumber = Number(inputedNumber.replace(/[^0-9,-]+/g,""));

        return formatedNumber;
    }

    doInputSubmit = (event) => {
        event.preventDefault();
        this.setState( {error: numberValidator(this.state.inputNumber) }, () => {
           if (!this.state.error.status) {
               this.doCalculateFraction(this.state.inputNumber);
           } else {
               this.doClearFraction();
           }
        });
    }


    doCalculateFraction(inputNumber) {
        const number = this.doFormatNumber(inputNumber);
        this.setState({fraction: calculateFraction(number)})
    }

    render() {
        return (
            <div className="calculate-minimum">
                <h1>Calculate Minimum</h1>

                <form className="form-calculate" onSubmit={this.doInputSubmit}>
                    <div className="input-group">
                        <label>Input Ammount</label>
                        <input type="text"
                               onChange={this.doInputChange}
                               className="input-number"
                               value={this.state.inputNumber} />
                    </div>
                    {this.state.error.status && (
                        <p
                            className="input-error"
                        >{this.state.error.message}
                        </p>
                    )}
                    <input className="input-submit"
                           type="submit" value="Submit" />
                </form>
                <Result
                    inputNumber={this.state.inputNumber}
                    fraction={this.state.fraction}
                />
            </div>
        );
    }
}
