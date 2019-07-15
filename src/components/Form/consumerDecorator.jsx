import React from 'react'
import {FormContext} from './'


function consumerDecorator(ChildComponent) {
    return ((props) => <FormContext.Consumer>
        {context => <ChildComponent {...props} context={context}/>}
    </FormContext.Consumer>)
}

export default consumerDecorator
