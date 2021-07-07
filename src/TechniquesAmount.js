import React from 'react';

import { InputText } from "primereact/inputtext";

class TechniquesAmount extends React.Component {
	static get DAFAULT() { return 30; }

	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);

		this.state = {
			value : this.props.value ? this.props.value : TechniquesAmount.DAFAULT
		}
	}

// How much techniques in the training?
	render() {
		return (
			<div className="p-field p-grid">
			    <label htmlFor="amount"
			    	className="p-col-12 p-md-2"
			    >Count
			    </label>
			    <div className="p-col-12 p-md-1">
				    <InputText id="amount" type="text" 
				    	value={this.state.value}
	    				onChange={this.onChange} 
	    			/>
	    		</div>
			</div>
		);
	}

	onChange(event) {
		this.setState({value: event.target.value});
	}

	getValue() {
		return this.state.value;
	}
}

export default TechniquesAmount;
