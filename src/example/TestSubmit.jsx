import React, {Component} from 'react'
import {boundMethod as autobind} from 'autobind-decorator'
import Submit from '../components/Submit'

export class TestSubmit extends Component {

    @autobind
    onClick() {
        this.props.handleSubmit()
    }

    render() {
        const {hasError} = this.props

        return (
            <div>
                <div onClick={this.onClick}>
                    Submit
                </div>
                hasError: {hasError ? 'form has errors' : ''}
            </div>
        )
    }
}


export default Submit(TestSubmit)
