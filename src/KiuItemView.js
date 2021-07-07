import React from 'react';

import { Button } from "primereact/button";
import TechniquesListView from "./TechniquesListView.js";

class KiuItemView extends React.Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.handleShowHideTechniques = this.handleShowHideTechniques.bind(this);
		
		let value = this.props.value;

		this.state = {
			checked: typeof value !== "undefined" && value !== null,
			expanded: false
		}

		// this.techniquesListView is set in render
	}

	render() {
		let kiu = this.props.kiu;
		let expndedButtonIcon = this.state.expanded ? "pi pi-chevron-down" : "pi pi-chevron-up";

		return (<div className="p-col-12 p-md-4 kiu-item-view">
				    <div className="p-inputgroup ">
		                <span className="p-inputgroup-addon p-md-1">
							<input id={kiu}
				  				type="checkbox" 
				  				key={kiu} 
				  				value={kiu} 
				  				defaultChecked={this.state.checked}
				  				onChange={this.onChange} 
				  			/>
		                </span>

		                <label htmlFor={kiu} className="p-inputgroup-addon p-md-2" style={{'justifyContent': "right"}}>{kiu} kiu</label>
		                
		                <span className="p-inputgroup-addon p-md-9" style={{'justifyContent': "left"}}>
							<Button icon={expndedButtonIcon} onClick={this.handleShowHideTechniques}
				              className="p-button-outlined p-button-icon-only p-button-sm p-button-rounded p-button-text" 
				            />
		                </span>
		            </div>

		            <div style={{display: this.state.expanded ? "block" : "none"}}>
		  				<TechniquesListView 
		  					kiu={kiu} 
		  					ref={(element) => this.techniquesListView = element}
		  					value={this.props.value}
		  				/>
		  			</div>
	  			</div>);
	}

	onChange(event) {
		// console.log(event.target.checked);
		// crazy
		// https://stackoverflow.com/questions/42550341/react-trigger-onchange-if-input-value-is-changing-by-state
		// DONE resolved

		let changedTo = event.target.checked;

		this.setState({
		 	checked: changedTo
		});

		this.changeTechniquesChecked(changedTo);
	}

	handleShowHideTechniques() {
		this.setState({
		 	expanded: !this.state.expanded
		});
	}



	// Children should change its checked property on parent checked property changed
	// Doesn't work - return to this later. 
	// State is set correctly but it's not rendered on the view.
	// DONE resolved
	changeTechniquesChecked(checked) {
		let techniquesItems = this.techniquesListView.techniquesItems;
		
		if (techniquesItems) {
			techniquesItems
				.filter((techniquesItem) => techniquesItem != null)
				.map((techniquesItem) => techniquesItem.setState({checked: checked}));
		}
	}

	getValue() {
		// return this.state.checked ? [this.props.kiu, this.techniquesListView.getValues()] : null;
		let values = this.techniquesListView.getValues();

		return values.length > 0 ? [this.props.kiu, this.techniquesListView.getValues()] : null;
	}
}

export default KiuItemView;