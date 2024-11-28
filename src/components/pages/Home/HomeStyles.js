import styled, { keyframes } from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: row-reverse;
    padding-left: 5%;
    gap: 9%;
    z-index: 0;

    @media (max-width: 850px) {
        flex-direction: column-reverse;
    }

    @media (max-width: 450px) {
        padding-left: 0;
        width: 100vw;
    }
`

const Ellipse = styled.img`
    position: absolute;
    bottom: 0px;
    right: 0;
    z-index: -1;

    @media (max-width: 450px) {
        width: 21rem;
    }
`

const Div = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
const scaleIn = keyframes`
    from {
        transform: scale(0.4);
    } to {
        transform: scale(1);
    }
`

const BigGlass = styled.img`
    width: 30rem;
    height: 31.3rem;
    animation: ${scaleIn} 1s ease-in-out;
    margin-top: 50px;

    @media (max-width: 450px) {
        width: 20rem;
        height: 21rem;
    }
`

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (max-width: 450px) {
        display: flex;
        width: 100vw;
        align-items: center;
    }
`

const First = styled.div`


    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90vw;
    }
`

const Title = styled.h2`
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 77.45px;

    @media (max-width: 450px) {
        font-size: 2rem;
        line-height: 47px;

        margin-top: 20px;
        text-align: center;
    }
`

const Title2 = styled.h1`
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 96px;

    @media (max-width: 450px) {
        font-size: 2rem;
        line-height: 56px;
        text-align: center;
    }
`

const Span = styled.span`
    font-weight: 700;
    font-size: 6rem;
    line-height: 144px;
    color: #1E3932;

    @media (max-width: 450px) {
        font-size: 3.5rem;
        line-height: 86px;
    }
`

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 36px;

    @media (max-width: 450px) {
        font-size: 1rem;
        text-align: center;
    }
`

const DivGlass = styled.div`
    display: flex;
    justify-content: end;
    gap: 50px;
    margin-top: 5rem;

    @media (max-width: 850px) {
        justify-content: space-around;
        gap: 0;
    }
`

const MiniGlass = styled.img`
    height: 113px;
    width: 109px;
    transition: transform 0.5s ease-out;

    &:hover{
        transform: rotate(360deg);
        animation: ${scaleIn} 1s ease-in-out;
    }

    @media (max-width: 450px) {
        height: 5rem;
        width: 5rem;
    }
`

export default {
    Main,
    Ellipse,
    Div,
    BigGlass,
    Container,
    First,
    Title,
    Title2,
    Span,
    Paragraph,
    DivGlass,
    MiniGlass
}