// @flow
import React, {Component} from 'react'
import {createCn} from 'bem-react-classname'
import {boundMethod as autobind} from 'autobind-decorator'
import {InputPropsType, InputValueType, InputErrorType} from './types'

const cn = createCn('form')

export const FormContext = React.createContext({})


type FormStateType = {
    values: Object,
    hasError: boolean
}

class Form extends Component<{}, FormStateType> {

    state = {
        values: {},
        hasError: false
    }

    @autobind
    registerInput(inputProps: InputPropsType) {
        const {name, value, error, verification} = inputProps
        const {values} = this.state

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
    updateValues(name: string, inputValues: InputValueType) {
        const {value} = inputValues
        const {values} = this.state

        values[name] = {
            ...values[name],
            value
        }

        this.setState({
            values: {...values}
        })
    }

    @autobind
    setInputError(name: string, error: InputErrorType) {
        const {values} = this.state

        values[name] = {
            ...values[name],
            error
        }

        this.setState({
            values: {...values}
        })

    }

    @autobind
    verifyInput(fieldName: string): boolean {
        const {values} = this.state
        const {value, verification} = values[fieldName]

        if (!verification) {
            this.setInputError(fieldName, '')

            return false
        }

        const verifyError = verification(value)

        if (verifyError) {
            this.setInputError(fieldName, verifyError.error)

            return true
        } else {
            this.setInputError(fieldName, '')

            return false
        }
    }

    @autobind
    validateForm(): Array<string> {
        const {values} = this.state

        const errors = Object.keys(values).reduce((acc: Array, fieldName: string): Array<string> => {
            const hasError = this.verifyInput(fieldName)

            if (hasError) acc.push(fieldName)

            return acc
        }, [])

        this.setState({
            hasError: !!errors.length
        })

        return errors
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
