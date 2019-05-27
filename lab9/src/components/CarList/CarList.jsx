import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';
import Car from '../../utilities/models/Car/Car';
import * as SC from './styles';

const CarList = ({
    cars,
    onCarClick,
    onCarHide,
    onCarDelete,
    isCarDescriptionVisible,
}) => (
    <SC.List>
        {cars.map((car, idx) => (
            <Item
                key={`${car.id}_${idx}`}
                name={car.model}
                brand={car.brand}
                onCarClick={() => onCarClick(car)}
                onCarHide={onCarHide}
                onCarDelete={() => onCarDelete(car.id)}
            />
        ))}
        {isCarDescriptionVisible && (
            <SC.Button onClick={onCarHide}>hide</SC.Button>
        )}
    </SC.List>
);

CarList.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape(Car)).isRequired,
    onCarClick: PropTypes.func.isRequired,
    onCarHide: PropTypes.func.isRequired,
    onCarDelete: PropTypes.func.isRequired,
    isCarDescriptionVisible: PropTypes.bool.isRequired,
};

export default CarList;
