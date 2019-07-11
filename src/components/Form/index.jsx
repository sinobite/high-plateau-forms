import React, {Component} from 'react'
import {createCn} from 'bem-react-classname'
import {boundMethod as autobind} from 'autobind-decorator'

const cn = createCn('form')

export const FormContext = React.createContext({})


class Form extends Component {

	state = {
		values: {},
		hasError: false
	}

	@autobind
	registerInput(inputProps) {
		const {name, value, error, verification} = inputProps
		const {values} = this.state

		values[name] = {
			name,
			value,
			error,
			verification
		}

		this.setState({
			values: {
				...values
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

			return true
		} else {
			this.setInputError(fieldName, '')

			return false
		}
	}

	@autobind
	validateForm() {
		const {values} = this.state

		const errors = Object.keys(values).reduce((acc, fieldName) => {
			const hasError = this.verifyInput(fieldName)

			if (hasError) acc.push(fieldName)

			return acc
		}, [])

		this.setState({
			hasError: !!errors.length
		})

		return errors
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
			</form>
		)
	}
}


export default Form
