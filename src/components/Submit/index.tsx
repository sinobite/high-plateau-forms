import React, {Component, ComponentType} from 'react';
import {boundMethod as autobind} from 'autobind-decorator'
import consumerDecorator from '../Form/consumerDecorator'
import {SubmitPropsTypes, FormValuesType} from '../Form/types';


interface Props {
    context?: {
        values: FormValuesType;
        validateForm: () => Array<string>;
        hasError: boolean
    };
    onChange?: (formValues: FormValuesType) => void
}

const submitFabric = (SubmitElement: ComponentType<SubmitPropsTypes & any>) => (submitElementProps: SubmitPropsTypes & any) => {

    @consumerDecorator
    class Submit extends Component<Props> {

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
