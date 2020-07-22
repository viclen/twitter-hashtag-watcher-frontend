import styled from 'styled-components';

export const Mosaic = styled.div`
    width: 100%;
    column-count: 4;
    column-gap: 1em;
    margin-top: 0.5em;

    .item {
        display: inline-block;
        margin: 0 0 0.5em;
        width: 100%;
    }

    @media only screen and (min-width: 1024px) {
        column-count: 4;
    }

    @media only screen and (max-width: 1023px) and (min-width: 768px) {
        column-count: 3;
    }

    @media only screen and (max-width: 767px) and (min-width: 540px) {
        column-count: 2;
    }

    @media only screen and (max-width: 539px) {
        column-count: 1;
    }
`;


export const Hashtag = styled.div`
    background: #FFFFFFBB;
    position: fixed;
    bottom: 5px;
    left: 5px;
    border-radius: 5px;
    font-size: 2rem;
    color: #099EE0;
    padding: 2px 5px;
`;