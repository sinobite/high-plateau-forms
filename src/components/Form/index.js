import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createCn} from 'bem-react-classname'

const cn = createCn('form')

export const FormContext = React.createContext({
	values: {},
	errors: [],
	registerInput: () => {},
	refreshInputValues: () => {},
	updateFormState: () => {},
	validateForm: () => {}
})

class Form extends Component {
	state = {
		values: {},
		errors: []
	}

	inputs = {}

	registerInput(inputInstanse, inputProps) {
		const {name} = inputProps

		this.inputs[name] = inputInstanse
	}

	updateFormState() {}

	refreshInputValues() {}

	validateForm() {}

	render() {
		return (
			<form className={cn()}>
				<FormContext.Provider value={{
					...this.state,
					registerInput: this.registerInput,
					updateFormState: this.updateFormState,
					refreshInputValues: this.refreshInputValues,
					validateForm: this.validateForm,
				}}>
					{this.props.children}
				</FormContext.Provider>
			</form>
		)
	}
}

Form.propTypes = {}

export default Form
