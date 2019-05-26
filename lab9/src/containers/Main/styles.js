import styled from 'styled-components';

const MainLayoutContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    box-sizing: border-box;
    justify-content: space-between;
`;

const BaseInfoContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #000;
    padding: 20px 20px;
    box-sizing: border-box;
`;

const DescriptionContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #000;
`;

export { MainLayoutContainer, BaseInfoContainer, DescriptionContainer };
