// @flow

export type InputErrorType = {
    error: string,
    code?: string | number
}

export type VerificationFunctionType = (value: any) => InputErrorType

export type InputValueType = {
    name: string,
    value: any
}

export type InputPropsType = {
    name: string,
    value: any,
    error: string,
    verification?: VerificationFunctionType
}

export type FormContextType = {
    values: {
        [key: string]: InputValueType
    },
    registerInput: Function,
    updateValues: Function,
    validateForm: () => Array<string>,
    hasError: boolean
}
