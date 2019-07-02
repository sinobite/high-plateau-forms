import React from 'react'
import ReactDOM from 'react-dom'
import TestInput from './TestInput'
import TestSubmit from './TestSubmit'
import Form from '../components/Form'

ReactDOM.render(
    <div>
        its alive
        <Form>
            <TestInput name='testInput' value='testvalue' />
            <TestInput name='testInput2' value='testvalue2' />
            <TestSubmit/>
        </Form>
    </div>,
     document.getElementById('app')
)

module.hot.accept()

