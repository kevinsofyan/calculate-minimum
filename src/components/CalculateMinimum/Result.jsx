import React, {Component} from 'react';

export default class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="result">
                <h3 className="result-number">{this.props.inputNumber}</h3>
                <ul className="result-list">
                {this.props.fraction && this.props.fraction.map((list, index) =>
                    <li key={index}>{
                        list.count > 0 ?
                            `${list.count} x Rp ${list.number}` : `left Rp${list.number} (no available fraction)`}
                    </li>
                )}
                </ul>
            </div>
        );
    }
}
