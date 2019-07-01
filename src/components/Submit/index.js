import React, {Component} from 'react';
import PropTypes from 'prop-types';
import consumerDecorator from '../Form/consumerDecorator'


const submitFabric = (SubmitElement) => (submitElementProps) => {

    @consumerDecorator
    class Submit extends Component {
        render() {
            return <SubmitElement {...submitElementProps}/>;
        }
    }

    return <Submit/>
}

export default submitFabric;
