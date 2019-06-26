import React, {Component} from 'react'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import formInput from '../components/FormInput'


export class TestInput extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }

    static defaultProps = {
        name: '123',
        value: '123',
        error: '',
        verification: (value) => {
            if (value.length > 5) return {error: 'String length must be < 5'}

            return false
        }
    }

    @autobind
    onChange(data) {
        this.props.onChange({
            value: data.currentTarget.value
        })
    }

    render() {
        const {value, name, error, hasError} = this.props

        return (
            <div>
                <input name={name} type="text" value={value} onChange={this.onChange} />
                error: {error}

            </div>
        );
    }
}


export default formInput(TestInput);
