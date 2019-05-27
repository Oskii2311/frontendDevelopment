import React from 'react';
import * as SC from './styles';
import PropTypes from 'prop-types';

const Error = ({ text }) => <SC.Error>{text}</SC.Error>;

Error.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Error;
