import React, { useState } from 'react';

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Panel } from 'primereact/panel';

import TECHNIQUES_MAP from "./Techniques.js";

const SettingsView = ({ settings } ) => {	
	const [isOpened, setIsOpened] = useState(false)

	// All the data tree is located in child view elements and is retrieved from there
	let delayElement = null;
	let amountElement = null;
	let kiusElement = null;

	/** @public */
	// TODO Seems to work correctly but investigate, what if there are (theoretically) few settingWiew on a page.
	SettingsView.toggleVisibility = () => {
		setIsOpened(!isOpened)
	}

	SettingsView.getSettings = () => {
		return {
			kius: kiusElement.getValues(),
			amount: amountElement.getValue(),
			delay: delayElement.getValue()
		}
	}

	// let label = (isOpened ? "Hide" : "Show") +  " Settings";
  	let displayStyle = {display: isOpened ? "block" : "none"};

  	 return (
	  	 	<div style={displayStyle}>
	  	 		<Panel header="General Settings">
	  	 			<div className="p-formgroup-inline">
			  			<TechniquesDelay 
			  				ref={(element) => delayElement = element } 
			  				value = {settings.delay}
			  			/>

			  			<TechniquesAmount 
			  				ref={(element) => amountElement = element }
			  				value = {settings.amount}
			  			/>
			  		</div>
	  			</Panel>
	  			<Panel header="Choose Techniques to Practice">
		  			<KiuListView
		  				ref={(element) => kiusElement = element } 
		  				value = {settings.kius}
		  			/>
	  			</Panel>
  			</div>
  	 );
}

SettingsView.DEFAULT_SETTINGS = function() {
	let defaultKius = {
		 /* 10: new Map(TECHNIQUES_MAP[10].map(technique => [technique, 1])),
		  9: new Map(TECHNIQUES_MAP[9].map(technique => [technique, 1])),
		  8: new Map(TECHNIQUES_MAP[8].map(technique => [technique, 1])),
		  7: new Map(TECHNIQUES_MAP[7].map(technique => [technique, 1])),
		  6: new Map(TECHNIQUES_MAP[6].map(technique => [technique, 1])),
		  5: new Map(TECHNIQUES_MAP[5].map(technique => [technique, 1])),*/
		  //4: new Map(TECHNIQUES_MAP[4].map(technique => [technique, 1])),
		 
		 3: new Map(TECHNIQUES_MAP[3].map(technique => [technique, 1]))
		};

/*
	  	let defaultKius = {
		  10: new Map(TECHNIQUES_MAP[10].map(technique => [technique, 1])),
		  9: new Map(TECHNIQUES_MAP[9].map(technique => [technique, 1])),
		  8: new Map(TECHNIQUES_MAP[8].map(technique => [technique, 1])),
		  7: new Map(TECHNIQUES_MAP[7].map(technique => [technique, 1])),
		  6: new Map(TECHNIQUES_MAP[6].map(technique => [technique, 1])),
		  5: new Map(TECHNIQUES_MAP[5].map(technique => [technique, 1])),
		  4: new Map(TECHNIQUES_MAP[4].map(technique => [technique, 1])),
		  3: new Map(TECHNIQUES_MAP[3].map(technique => [technique, 1]))
		};
*/
/*
		let defaultKius = Object.keys(TECHNIQUES_MAP)
	  		.map( i => new Map(TECHNIQUES_MAP[Number(i)].map(technique => [technique, 1])))
	  		// .forEach((element, i) => defaultKius[10 - i] = element );
	  		.reduce(((kiusObj, kiuTehniques, j) => { 
	  			kiusObj[j + Number(Object.keys(TECHNIQUES_MAP)[0])] = kiuTehniques; 
	  			return kiusObj; 
	  		}), {});
*/
	  	let settings = {
	      kius: defaultKius,
	      amount: 30,
	      delay: 3
	    };

  	return settings;
}

// TODO: Load saved settings

SettingsView.defaultProps = {
	settings: SettingsView.DEFAULT_SETTINGS()
}

class KiuListView extends React.Component {
	constructor(props) {
		super(props);

		this.kiuItemsView = [];
	}

	render() {
		this.kiuItemsView = [];
		let kiusArray = Object.keys(TECHNIQUES_MAP);
		let value = this.props.value ? this.props.value : {};

  		let listItems = kiusArray.map((kiu) => {
			return <KiuItemView 
					key={kiu}
	  				kiu={kiu} 
	  				value={value[kiu]} 
	  				ref= { (element) => this.kiuItemsView.push(element) } 
	  			/>
  		});
		
		return(
			<div className="p-grid">
				{listItems}
			</div>
			);
	}

	getValues() {
		let values = this.kiuItemsView
			.filter((el) => el != null)
			.map((kiuItemView) => kiuItemView.getValue())
			.filter((el) => el != null);
			// .map((kiu) => [kiu, null] );

		return values;
	}
}

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

class TechniquesListView extends React.Component {
	constructor(props) {
		super(props);

		this.techniquesItems = [];
	}

	render() {
		this.techniquesItems = [];

		let kiu = this.props.kiu;
		let value = this.props.value ? this.props.value : new Map();

		let techniquesArray = TECHNIQUES_MAP[kiu];
	  	let listItems = techniquesArray.map((technique) => 
	  		<TechniquesItemView 
	  			key={technique}
	  			kiu={kiu} 
	  			technique={technique} 
	  			value={value.get(technique)}
	  			ref = {(element) => this.techniquesItems.push(element) }
	  		/>);

	  	return <>{listItems}</>;
	}

	getValues() {
		let values = this.techniquesItems
			.filter((techniquesItem) => techniquesItem != null)
			.map((techniquesItem) => techniquesItem.getValue())
			.filter((value) => value != null);

		return values;
	}

	isAnyTechniqueChecked() {
		return this.getValues().length > 0;
	}
}

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

class WeightView extends React.Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.state = {
			value : this.props.value
		}
	}

	render() {
		return(<select value={this.state.value} onChange={this.onChange}> 
				<option value="0">0</option>
		  		<option value="1">1</option>
		  		<option value="2">2</option>
		  		<option value="3">3</option>
		  	</select>);
	}

	onChange(event) {
		this.setState({value: event.target.value});
	}

	getValue() {
		return this.state.value;
	}
}

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

export default SettingsView;