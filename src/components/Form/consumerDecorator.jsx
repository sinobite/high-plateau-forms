import React from "react";
import {FormContext} from "./";

const consumerDecorator = (ChildComponent) => (props) => (
    <FormContext.Consumer>
        {data => <ChildComponent {...props} {...data} />}
    </FormContext.Consumer>
)

export default consumerDecorator
