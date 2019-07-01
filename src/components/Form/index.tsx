import React, {Component} from 'react'
import {createCn} from 'bem-react-classname'
import {boundMethod as autobind} from 'autobind-decorator'
import {InputPropsTypes} from "./types"

const cn = createCn('form')

export const FormContext = React.createContext({})

type FormValuesType = {
	[key: string]: InputPropsTypes;
}

type Props = {}
type State = {
	values: FormValuesType;
}


class Form extends Component<Props, State> {

	state = {
		values: {}
	}

	@autobind
	registerInput(inputProps: InputPropsTypes) {
		const {name, value, error, verification} = inputProps
		const {values}: any = this.state

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
	updateValues(name: string, inputValues: InputPropsTypes) {
		const {value} = inputValues
		const {values}: any = this.state

		values[name] = {
			...values[name],
			value
		}

		this.setState({
			values: {...values}
		})
	}

	@autobind
	setInputError(name: string, error: string) {
		const {values}: any = this.state

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
	verifyInput(fieldName: string) {
		const {values}: any = this.state
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
			</form>
		)
	}
}


export default Form
