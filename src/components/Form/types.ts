export type ErrorType = {
    error: string;
}

export type FormValuesType = {
    [key: string]: InputPropsTypes;
}

export type VerificationFunction = (value: any) => boolean | ErrorType

export interface InputPropsTypes {
    name: string;
    value: any;
    error?: string;
    verification?: VerificationFunction;
}

export interface SubmitPropsTypes {
    onSubmit: (formData: FormValuesType) => void
}
