export type ErrorType = {
    error: string;

}

export type VerificationFunction = () => boolean|ErrorType

export interface InputPropsTypes {
    name: string;
    value: any;
    error: string;
    verification: VerificationFunction
}

