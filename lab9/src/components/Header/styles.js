import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4em;

    background: transparent;
    padding: 0 26px;
    box-shadow: 0 0 20px 0 #c2c2c2;
    z-index: 1;
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-size: 0.5em;
    &:hover {
        text-decoration: underline;
    }
`;

const Wrapper = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export { Header, StyledLink, Wrapper };
