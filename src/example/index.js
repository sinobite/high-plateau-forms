import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import TestInput from './TestInput'
import Form from '../components/Form'

ReactDOM.render(
    <div>
        its alive
        <Form>
            <TestInput name='testInput' value='testvalue' />
        </Form>
    </div>,
     document.getElementById('app')
)

module.hot.accept()
