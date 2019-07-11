import React, {Component} from 'react'
import {boundMethod as autobind} from 'autobind-decorator'
import formInput from '../components/FormInput'


const defaultProps = {
    name: '123',
    value: '123',
    verification: (value) => {
        if (value.length > 5) return {error: 'String length must be < 5'}

        return false
    }
}

export class TestInput extends Component {

    static defaultProps = defaultProps

    @autobind
    onChange(event) {
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
