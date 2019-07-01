import React, {Component, ComponentType} from 'react'
import PropTypes from 'prop-types'
import {boundMethod as autobind} from 'autobind-decorator'
import consumerDecorator from '../Form/consumerDecorator'
import {InputPropsTypes} from '../Form/types'


interface Props {
	values: object;
	registerInput: (p: InputPropsTypes, Input: React.ComponentType<InputPropsTypes>) => void;
	updateValues: (name: string, inputValues: InputPropsTypes) => void;
}

const formInput = (Input: ComponentType<InputPropsTypes>) => (inputProps: InputPropsTypes) => {

	// @ts-ignore
	@consumerDecorator
	class FormInput extends Component<Props> {

		constructor(props: Props) {
			super(props)
			const {verification} = Input.defaultProps

			props.registerInput({verification, ...inputProps}, Input)
		}

		@autobind
		onChange(inputValues: InputPropsTypes) { // {value}
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
