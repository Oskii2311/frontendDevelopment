import styled from 'styled-components';

const Item = styled.li`
    width: 100%;
    line-height: 2em;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    height: 50%;
    margin: 0 4px;
`;

export { Item, Button };
