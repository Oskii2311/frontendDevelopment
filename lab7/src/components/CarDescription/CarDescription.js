import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Car from '../../utilities/models/Car/Car';

const CarDescription = memo(({ car }) => (
    <>
        Description: {car.model} {car.marka}
        <ul>
            <li> body: {car.nadwozie}</li>
            <li>year of Production: {car.rokProdukcji} year</li>
            <li> engine power: {car.mocSilnika} km</li>
            <li>engine capacity: {car.pojemnoscSilnika} cm^3</li>
            <li> color: {car.kolor}</li>
            <li> is it produced ?: {car.wPrdukcji ? 'yes' : 'no'}</li>
        </ul>
    </>
));

CarDescription.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape(Car)),
};

export default CarDescription;
