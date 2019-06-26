import React, {Component} from 'react'
import {createCn} from 'bem-react-classname'
import autobind from 'autobind-decorator';

const cn = createCn('form')

export const FormContext = React.createContext({
	values: {},
	errors: [],
	registerInput: () => {},
	refreshInputValues: () => {},
	updateValues: () => {},
	validateForm: () => {},
})

class Form extends Component {
	state = {
		values: {},
		errors: [],
	}

	@autobind
	registerInput(inputProps) {
		const {name, value, error, verification} = inputProps
		const {values} = this.state

		this.setState({
			values: {
				...values,
				[name]: {
					value,
					error,
					verification
				}
			}
		})
	}

	@autobind
	updateValues(name, inputValues) {
		const {value} = inputValues
		const {values} = this.state

		values[name] = {
			...values[name],
			value
		}

		this.setState({
			values: {...values}
		})
	}

	@autobind
	setInputError(name, error) {
		const {values} = this.state

		values[name] = {
			...values[name],
			error
		}

		this.setState({
			values: {...values}
		})
	}


	refreshInputValues() {}

	@autobind
	verifyInput(fieldName) {
		const {values} = this.state
		const {value, verification} = values[fieldName]

		const verifyError = verification(value)

		if(verifyError) {
			this.setInputError(fieldName, verifyError.error)
		} else {
			this.setInputError(fieldName, '')
		}
	}

	@autobind
	validateForm() {
		const {values} = this.state

		Object.keys(values).forEach((fieldName) => {
			this.verifyInput(fieldName)
		})

	}

	render() {
		return (
			<form className={cn()}>
				<FormContext.Provider value={{
					...this.state,
					registerInput: this.registerInput,
					updateValues: this.updateValues,
					refreshInputValues: this.refreshInputValues,
					validateForm: this.validateForm,
				}}>
					{this.props.children}
				</FormContext.Provider>

				<div role='presentation' onClick={this.validateForm}>validate</div>
			</form>
		)
	}
}


export default Form
