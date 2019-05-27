import React from 'react';
import Error from '../../../components/Error/Error';
import PropTypes from 'prop-types';
import * as SC from './styles';
const Select = ({ error = false, name, onChange, options, value }) => {
    return (
        <>
            <SC.Select
                error={!!error}
                onChange={onChange}
                name={name}
                value={value}
            >
                {options.map((option, idx) => {
                    if (idx === 0) {
                        return (
                            <option
                                key={`option_${value}_${idx}`}
                                value=""
                                disabled
                            >
                                {option.text}
                            </option>
                        );
                    }
                    return (
                        <option
                            key={`option_${value}_${idx}`}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    );
                })}
            </SC.Select>
            {error && <Error text="this field is required" />}
        </>
    );
};

Select.propTypes = {
    error: PropTypes.bool,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({ value: PropTypes.string, text: PropTypes.string }),
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Select;
