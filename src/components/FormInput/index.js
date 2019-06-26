import React, {Component} from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import {FormContext} from '../Form'

const consumerDecoreator = (ChildComponent) => () => (
	<FormContext.Consumer>
		{data => <ChildComponent {...data} />}
	</FormContext.Consumer>
)

const formInput = (Input) => (inputProps) => { // {name, value, error}

	@consumerDecoreator
	class FormInput extends Component {

		static propTypes = {
			values: PropTypes.object.isRequired,
			registerInput: PropTypes.func,
			updateValues: PropTypes.func.isRequired
		}

		constructor(props) {
			super(props)
			const {verification} = Input.defaultProps

			props.registerInput({verification, ...inputProps}, Input)
		}

		@autobind
		onChange(inputValues) { // {value}
			const {name} = inputProps

			this.props.updateValues(name, inputValues)
		}

		@autobind
		getProps() {
			const {values} = this.props
			const {name} = inputProps

			return {
				...values[name],
				onChange: this.onChange
			}
		}

		render() {
			// const values
			const props = this.getProps()

			return <Input {...props} />
		}
	}

	return <FormInput />
}

export default formInput
