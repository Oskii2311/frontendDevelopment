import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';
import Car from '../../utilities/models/Car/Car';

const CarList = memo(({ cars, onCarClick, onCarHide }) => (
    <ul>
        {cars.map(car => (
            <Item
                key={car.id}
                name={car.model}
                brand={car.brand}
                onCarClick={() => onCarClick(car)}
                onCarHide={onCarHide}
            />
        ))}
    </ul>
));

CarList.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape(Car)).isRequired,
    onCarClick: PropTypes.func.isRequired,
    onCarHide: PropTypes.func.isRequired,
};

export default CarList;
