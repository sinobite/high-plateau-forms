import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {boundMethod as autobind} from 'autobind-decorator'
import consumerDecorator from '../Form/consumerDecorator'

const formInput = (Input) => (inputProps) => {

	@consumerDecorator
	class FormInput extends Component {

		static propTypes = {
			context: PropTypes.shape({
				values: PropTypes.object,
				registerInput: PropTypes.func,
				updateValues: PropTypes.func,
			})
		}

		constructor(props) {
			super(props)
			const {verification} = Input.defaultProps

			props.context.registerInput({verification, ...inputProps}, Input)
		}

		@autobind
		onChange(inputValues) {
			const {name} = inputProps

			this.props.context.updateValues(name, inputValues)
		}

		@autobind
		getProps() {
			const {values} = this.props.context
			const {name} = inputProps

			return {
				...values[name],
				onChange: this.onChange
			}
		}

		render() {
			const props = this.getProps()

			return <Input {...props} />
		}
	}

	return <FormInput />
}

export default formInput
