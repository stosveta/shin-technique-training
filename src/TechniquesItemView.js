import React from 'react';

import WeightView from "./WeightView.js";

class TechniquesItemView extends React.Component {
	constructor(props) {
		super(props);

		// this.techniqueItem is set in render
		// this.weightItem is set in render
		this.onChange = this.onChange.bind(this);

		let value = this.props.value;

		this.state = {
			checked: typeof value !== "undefined" && value !== null,
		}
	}

	render() {
		let kiu = this.props.kiu;
		let technique = this.props.technique;
		let value = this.props.value;
		let checked = this.state.checked;
		let key = kiu + "-" + technique;
		let weight = checked ? value : 1;

		return (
				
         <div className="p-col-12 p-md-12 zebra-row">
            <div className="p-inputgroup ">
                <span className="p-inputgroup-addon">
                    <input type="checkbox" 
                    	key={key} 
		  				value={technique}
		  				checked={checked}
		  				ref={(element) => this.techniqueItem = element} 
		  				onChange={this.onChange}
		  				id={key}
                    />
                </span>

                <label htmlFor={key} className="p-inputgroup-addon p-col-9 p-md-9">{technique}</label>

                <span className="p-inputgroup-addon">
                    <WeightView
		  				value={weight}
		  				ref={(element) => this.weightItem = element}
		  			/>
                </span>
            </div>
        </div>
	  	);
	}

	onChange(event) {
		this.setState({
			checked: event.target.checked,
		});
	}

	getValue() {
		return this.state.checked ? [this.props.technique, this.weightItem.getValue()] : null;
	}
}

export default TechniquesItemView;
