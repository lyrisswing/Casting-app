import styled from 'styled-components';

export const Card = styled.div`
    height: 35rem;
    width: 28rem;
    position: relative;
    border-radius: 1rem;
    border: 1px solid #C3C3C3;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardImage = styled.div`
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    width: 24rem;
    height: 26rem;
    object-fit: cover;
    background-size: cover;
    background-position: center;
`;

export const CardName = styled.span`
    font-size: 2.4rem;
    color: #333;
`;

export const Feedback = styled.span`
    position: absolute;
    top: 78%;
    padding: 1rem 2rem;
    text-align: center;
    margin: auto;
    border-radius: 1rem;
    font-size: 1.6rem;
    background-color: ${props => props.direction === "left" ? "#f24235" : "#61e88e"};
    z-index: 99;
`;