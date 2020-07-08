import styled from 'styled-components';

export const CollectionContainer = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const CollectionHeading = styled.h1`
    font-size: 2.4rem;
    font-weight: 400;
    color: #333;
    padding-bottom: 1rem;
`;

export const HeadingLogo = styled.div`
    width: 40rem;
    height: 14rem;
    background-image: url("https://vignette.wikia.nocookie.net/logopedia/images/a/a0/Mission-impossible-iii-51838e834a4ce.png/revision/latest?cb=20160718234200");
    background-size: cover;
    background-position: center;
`;

export const CardContainer = styled.div`
    height: 66%;
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;

    .swipe {
        position: absolute; //important for swiping to work
    }
`;