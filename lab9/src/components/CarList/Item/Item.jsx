import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './styles';

const Item = ({ name, brand, onCarClick, onCarDelete }) => (
    <SC.Item>
        <span onClick={onCarClick}>
            {brand} {name}
        </span>
        <SC.Button onClick={onCarDelete}>Delete Car</SC.Button>
    </SC.Item>
);

Item.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    onCarClick: PropTypes.func.isRequired,
    onCarDelete: PropTypes.func.isRequired,
};

export default Item;
