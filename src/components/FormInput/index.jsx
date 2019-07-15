// @flow
import * as React from 'react'
import {boundMethod as autobind} from 'autobind-decorator'
import consumerDecorator from '../Form/consumerDecorator'
import {VerificationFunctionType, InputValueType, InputPropsType, FormContextType} from '../Form/types'


type PropsType = {
    context: FormContextType
}

type DecoratedInputPropsType = {
    [key: string]: InputValueType,
    onChange: (InputValueType) => void
}


const formInput = (Input: React.ComponentType<InputPropsType>): any => (inputProps: InputPropsType): React.ComponentType<DecoratedInputPropsType> => {

    @consumerDecorator
    class FormInput extends React.Component<PropsType> {

        constructor(props: PropsType) {
            super(props)

            const verification = FormInput.getVerification()

            props.context.registerInput({verification, ...inputProps}, Input)
        }

        static getVerification(): null | VerificationFunctionType {
            if (inputProps.verification) return inputProps.verification

            if (Input.defaultProps && Input.defaultProps.verification) return Input.defaultProps.verification

            return null
        }

        @autobind
        onChange(inputValues: InputValueType) {
            const {name} = inputProps

            this.props.context.updateValues(name, inputValues)
        }

        @autobind
        getProps(): DecoratedInputPropsType {
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

    return <FormInput/>
}

export default formInput
