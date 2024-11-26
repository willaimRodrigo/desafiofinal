import styled from "styled-components";

const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;
    gap: 5vw;

    @media (max-width: 850px) {
        flex-direction: column-reverse;
    }
`

const Store = styled.img`
    width: 23rem; 

    @media (max-width: 850px) {
        width: 26rem;
    }
`

const Info = styled.div`
    width: 45vw;

    @media (max-width: 850px) {
        width: 90vw;
    }
`

const H3 = styled.h3`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.8rem;
    color: #1e3932;
`

const H2 = styled.h2`
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 6rem;
    color: #1e3932;
`

const Paragraph = styled.p`
    font-weight: 400;
   font-size: 1.5rem;
   line-height: 2.25rem;
   color: #1e3932;
`

export default {
    Section,
    Store,
    Info,
    H3,
    H2,
    Paragraph
}