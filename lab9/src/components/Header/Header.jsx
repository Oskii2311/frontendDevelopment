import React from 'react';
import * as SC from './styles';

const Header = () => {
    return (
        <SC.Header>
            <span>Cars App</span>
            <SC.Wrapper>
                <SC.StyledLink to="/">Home</SC.StyledLink>
                <SC.StyledLink to="create-car">Add Car</SC.StyledLink>
            </SC.Wrapper>
        </SC.Header>
    );
};

export default Header;
