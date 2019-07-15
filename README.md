# high-plateau-forms
Simple React form based on React Context


### Example

###### TestInput.js
```javascript
import formInput from 'hight-plateau-forms/lib/components/FormInput'


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
```

###### TestSubmit.js
```javascript
import Submit from 'hight-plateau-forms/lib/components/Submit'

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
```

###### TestForm.js
```javascript
import Form from 'hight-plateau-forms/lib/components/Form'
import TestInput from './TestInput'
import TestSubmit from './TestSubmit'

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
```
