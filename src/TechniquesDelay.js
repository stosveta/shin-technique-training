import React from 'react';

import { InputText } from "primereact/inputtext";

// How much seconds between the techniques?
class TechniquesDelay extends React.Component {
	static get DAFAULT() { return 3; }

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);

		this.state = {
			value : this.props.value ? this.props.value : TechniquesDelay.DAFAULT
		}
	}

	render() {
		return (
			<div className="p-field p-grid">
			    <label htmlFor="delay"
			    	className="p-col-12 p-md-2"
			    >Interval</label>
			    <div className="p-col-12 p-md-1">
				    <InputText id="delay" type="text" 
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
		return this.state.value * 1000;
	}
}

export default TechniquesDelay;
