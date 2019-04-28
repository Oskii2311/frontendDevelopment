import React, { memo } from "react";
import Item from "./Item/Item";
import PropTypes from "prop-types";
import Car from "../../utilities/models/Car/Car";

const CarList = memo(({ cars }) => (
  <ul>
    {cars.map(car => (
      <Item key={car.id} name={car.model} brand={car.marka} />
    ))}
  </ul>
));

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape(Car))
};

export default CarList;
