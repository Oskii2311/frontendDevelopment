import styled from 'styled-components';

const RadioContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    align-content: center;
`;

const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #000;
    padding: 4px;
    margin-bottom: ${({ error }) => (error ? 0 : '10px')};
`;

const Select = styled.select`
    margin-bottom: ${({ error }) => (error ? 0 : '10px')};
`;

export { RadioContainer, Input, Select };
