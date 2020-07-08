import styled from 'styled-components';

export const ButtonContainer = styled.div`
    position: fixed;
    width: 25rem;
    display: flex;
    justify-content: space-between;
    padding-left: 2.5rem;
    padding-top: 5.5rem;
`;

export const ChooseButton = styled.button`
    outline: none;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    padding-top: 0.3rem;
    background-color: transparent;
    border: 2px solid ${props => props.reject ? "#f24235" : "#61e88e"};
    z-index: 999;
    cursor: pointer;
    
    .fa-times {
        color: #f24235;
        font-size: 3rem;
    }
    .fa-check {
        color: #61e88e;
        font-size: 2.6rem;
    }
`;