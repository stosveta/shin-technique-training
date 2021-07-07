import React from 'react';

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

export default WeightView;
