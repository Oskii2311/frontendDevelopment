import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Item = memo(({ name, brand }) => (
    <li>
        {brand} {name}
    </li>
));

Item.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
};

export default Item;
