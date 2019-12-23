import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

/*const options = [
	{ key: 'm', text: 'Miles', value: 'mi' },
	{ key: 'k', text: 'Kilometers', value: 'km' }
]*/

export default class RunForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...props.runData,
			error: "",
			needTime: true
		};
		
		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	handleChange = (e, { value }) => this.setState({ value })
	
	handleFieldChange = event => {
		const { value, name } = event.target;
		this.setState({
			...this.state,
			[name]: value,
			submitted: false
		});
				
		if ((this.hour>0 || this.minute>0 || this.second>0) && this.mileage>0){
			this.setState({
				...this.state,
				needTime: false
			});
		}
	};
	
	onSubmit(e) {
		e.preventDefault();
		if (!this.isFormValid()) {
			this.setState({ error: "All fields are required." });
			return;
		}
		this.setState({ submitted: true });
		this.props.handler(this.state);
		
		
	}

	isFormValid() {
		return this.state.mileage !== "0" && (this.state.hour !== "0" || this.state.minute !== "0" || this.state.second !== "0");
	}
	renderError() {
		return this.state.error ? (
			<div className="alert-red">{this.state.error}</div>
		) : null;
	}
	
	render() {
		return (
			<React.Fragment>
				<Form className="ui centered">
					<Form.Group>
						<Form.Input
							label="Miles Run"
							type="number"
							onChange={ this.handleFieldChange }
							name="mileage"
							value={this.state.mileage}
							size="huge"
							width={4}
							min="0"
							/>
						
					</Form.Group>
					<Form.Group widths="equal">
						<Form.Input 
							fluid
							label="Hours"
							name="hour"
							value={this.state.hour}
							onChange={this.handleFieldChange}
							type="number"
							min="0"
							size="huge"
						/>
						<Form.Input
							fluid
							label="Minutes"
							name="minute"
							value={this.state.minute}
							onChange={this.handleFieldChange}
							type="number"
							min="0"
							size="huge"
						/>
						<Form.Input
							fluid
							label="Seconds"
							name="second"
							value={this.state.second}
							onChange={this.handleFieldChange}
							type="number"
							min="0"
							size="huge"
						/>
					</Form.Group>
					<Form.Button disabled={this.needTime} onClick={this.onSubmit}>Update Run</Form.Button>
				</Form>
			</React.Fragment>
		);
	}
}