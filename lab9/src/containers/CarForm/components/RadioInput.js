import React from 'react';
import Error from '../../../components/Error/Error';
import * as SC from './styles';
import PropTypes from 'prop-types';

const RadioInput = ({ error = false, name, options, onChange, value }) => {
    return (
        <>
            {options.map(option => {
                return (
                    <SC.RadioContainer key={`radioInput_${option.label}`}>
                        <input
                            value={option.value}
                            checked={option.value === value}
                            onChange={onChange}
                            type="radio"
                            name={name}
                        />
                        <label htmlFor={name}>{option.label}</label>
                    </SC.RadioContainer>
                );
            })}

            {error && <Error text="this field is required" />}
        </>
    );
};

RadioInput.propTypes = {
    error: PropTypes.bool,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({ value: PropTypes.string, label: PropTypes.string }),
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default RadioInput;
