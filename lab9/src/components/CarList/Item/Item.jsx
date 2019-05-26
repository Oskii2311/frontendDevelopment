import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Item = memo(({ name, brand, onCarClick, onCarHide }) => (
    <li
        style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        }}
    >
        <span onClick={onCarClick}>
            {brand} {name}
        </span>
        <button onClick={onCarHide}>hide</button>
    </li>
));

Item.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    onCarClick: PropTypes.func.isRequired,
    onCarHide: PropTypes.func.isRequired,
};

export default Item;
