import React from "react";
import {FormContext} from "./";


function consumerDecorator<C extends React.ComponentClass>(ChildComponent: C): C {
    return ((props: any) => <FormContext.Consumer>
        {context => <ChildComponent {...props} context={context} />}
    </FormContext.Consumer>) as any as C
}

export default consumerDecorator
