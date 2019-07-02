import React, {Component, ComponentType} from 'react'
import {boundMethod as autobind} from 'autobind-decorator'
import consumerDecorator from '../Form/consumerDecorator'
import {InputPropsTypes, FormValuesType} from '../Form/types'


interface Props {
	context?: {
		values: FormValuesType;
		registerInput: (inputProps: InputPropsTypes, Input: React.ComponentType<InputPropsTypes>) => void;
		updateValues: (name: string, inputValues: InputPropsTypes) => void;
	}
}

const formInput = (Input: ComponentType<InputPropsTypes & any>) => (inputProps: InputPropsTypes & any) => {

	@consumerDecorator
	class FormInput extends Component<Props> {

		constructor(props: Props) {
			super(props)
			const {verification} = Input.defaultProps

			props.context.registerInput({verification, ...inputProps}, Input)
		}

		@autobind
		onChange(inputValues: InputPropsTypes) {
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
