import React from 'react';
import PropTypes from 'prop-types';
import Car from '../../utilities/models/Car/Car';
import * as SC from './styles';
const CarDescription = ({ car }) => (
    <SC.Container>
        <h3>
            Description: {car.model} {car.brand}.
        </h3>
        It is a {car.body}. Made in {car.yearOfProduction}. This model has{' '}
        {car.enginePower} km and {car.engineCapacity} cm^3. Offered color:
        {car.color}. Is it produced : {car.isStillProduced}
    </SC.Container>
);

CarDescription.propTypes = {
    car: PropTypes.shape(Car).isRequired,
};

export default CarDescription;
