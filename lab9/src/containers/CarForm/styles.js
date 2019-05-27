import styled from 'styled-components';

const Form = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
`;

const RadioContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    align-content: center;
`;

export { Form, RadioContainer, Container };
