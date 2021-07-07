import React from 'react';

import TECHNIQUES_MAP from "./Techniques.js";
import KiuItemView from "./KiuItemView.js";

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

export default KiuListView;
