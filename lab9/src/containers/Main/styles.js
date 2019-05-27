import styled from 'styled-components';

const MainLayoutContainer = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    box-sizing: border-box;
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
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #000;
`;

const SearchLabel = styled.label`
    font-size: 0.6em;
`;

export {
    MainLayoutContainer,
    BaseInfoContainer,
    DescriptionContainer,
    SearchLabel,
};
