import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {boundMethod as autobind} from 'autobind-decorator'
import consumerDecorator from '../Form/consumerDecorator'


const submitFabric = (SubmitElement) => (submitElementProps) => {

    @consumerDecorator
    class Submit extends Component {

        static propTypes = {
            context: PropTypes.shape({
                values: PropTypes.object,
                registerInput: PropTypes.func,
                updateValues: PropTypes.func,
            }),
            onChange: PropTypes.func
        }

        @autobind
        handleSubmit() {
            const formErrors = this.props.context.validateForm()

            if (!formErrors.length && this.props.onChange) {
                this.props.onChange(this.props.context.values)
            }
        }

        render() {
            return <SubmitElement {...submitElementProps} handleSubmit={this.handleSubmit} hasError={this.props.context.hasError} />
        }
    }

    return <Submit />
}

export default submitFabric
