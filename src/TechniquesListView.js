import React from 'react';
import TECHNIQUES_MAP from "./Techniques.js";
import TechniquesItemView from "./TechniquesItemView.js";

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

export default TechniquesListView;
