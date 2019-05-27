import React from 'react';
import Error from '../../../components/Error/Error';
import PropTypes from 'prop-types';
import * as SC from './styles';
const Input = ({ error = false, name, placeholder, onChange, value }) => {
    return (
        <>
            <SC.Input
                value={value}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
            />
            {error && <Error text="this field is required" />}
        </>
    );
};

Input.propTypes = {
    error: PropTypes.bool,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Input;
