import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './styles';

const Item = ({ name, brand, onCarClick, onCarDelete, onEditCar }) => (
    <SC.Item>
        <span onClick={onCarClick}>
            {brand} {name}
        </span>
        <div>
            <SC.Button onClick={onCarDelete}>Delete Car</SC.Button>
            <SC.Button onClick={onEditCar}>Edit Car</SC.Button>
        </div>
    </SC.Item>
);

Item.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    onCarClick: PropTypes.func.isRequired,
    onCarDelete: PropTypes.func.isRequired,
    onEditCar: PropTypes.func.isRequired,
};

export default Item;
