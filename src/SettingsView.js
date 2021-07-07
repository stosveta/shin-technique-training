import React, { useState } from 'react';
import { Panel } from 'primereact/panel';

import TECHNIQUES_MAP from "./Techniques.js";
import KiuListView from "./KiuListView.js";
import TechniquesDelay from "./TechniquesDelay.js";
import TechniquesAmount from "./TechniquesAmount.js";

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

export default SettingsView;
