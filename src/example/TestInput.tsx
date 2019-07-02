import React, {Component} from 'react'
import {boundMethod as autobind} from 'autobind-decorator'
import formInput from '../components/FormInput'
import {VerificationFunction} from "../components/Form/types";


interface Props {
    name: string;
    onChange?: (inputValues: {
        value: string
    }) => void;
    value: string;
    error?: string;
    verification?: VerificationFunction
}

const defaultProps = {
    name: '123',
    value: '123',
    verification: (value: string) => {
        if (value.length > 5) return {error: 'String length must be < 5'}

        return false
    }
}

export class TestInput extends Component<Props> {
    public static defaultProps = defaultProps

    @autobind
    onChange(event: React.FormEvent<HTMLInputElement>) {
        this.props.onChange({
            value: event.currentTarget.value
        })
    }

    render() {
        const {value, name, error} = this.props

        return (
            <div>
                <input name={name} type="text" value={value} onChange={this.onChange} />
                error: {error}
            </div>
        )
    }
}


export default formInput(TestInput)
