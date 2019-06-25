import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FormContext} from '../Form'

export const propTypes = {
	children: PropTypes.node.isRequired
}

class FormInput extends Component {

	render() {
		return (
			<FormContext.Consumer>
				{(data) => React.Children.map(this.props.children, child => React.cloneElement(child, data))}
			</FormContext.Consumer>
		)
	}
}

FormInput.propTypes = propTypes

export default FormInput
