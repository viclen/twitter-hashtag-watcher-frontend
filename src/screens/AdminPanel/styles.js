import styled, { css } from 'styled-components';

export const Header = styled.div`
    position: fixed;
    height: 80px;
    display: flex;
    width: 100%;
    transition: 0.5s;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background: #F1F1F1;

    ${props => props.expand && css`
        height: 100%;
        background: #C6C6C6;
        border-bottom: none;
    `}

    > div {
        padding: 10px;
    }
`;