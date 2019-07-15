// @flow
import React, {Component} from 'react';
import {boundMethod as autobind} from 'autobind-decorator'
import consumerDecorator from '../Form/consumerDecorator'
import {FormContextType} from '../Form/types'


type PropsType = {
    context: FormContextType,
    onChange?: Function
}

const submitFabric = (SubmitElement: React.ComponentType<PropsType>): Function => (submitElementProps: PropsType): React.ComponentType => {

    @consumerDecorator
    class Submit extends Component<PropsType> {

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
