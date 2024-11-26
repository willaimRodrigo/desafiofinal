import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;
    background-color: #1E3932;

    @media (max-width: 850px) {
        flex-direction: column-reverse;
    }
`

const Grao = styled.img`
    width: 500px;
    height: 22.5rem;
`

const News = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;

    @media (max-width: 850px) {
        width: 90vw;
    }
` 

const H3 = styled.h3`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.8rem;
    color: aliceblue;
`

const H2 = styled.h2`
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 6rem;
    color: aliceblue;
`

const Paragraph = styled.p`
   font-weight: 400;
   font-size: 1.5rem;
   line-height: 2.25rem;
   color: aliceblue;
`

export default {
    Section,
    News,
    Grao,
    H3,
    H2,
    Paragraph
}