import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: row-reverse;
    padding-left: 5%;
    gap: 9%;
    z-index: 0;
`

const Ellipse = styled.img`
    position: absolute;
    bottom: 0px;
    right: 0;
    z-index: -1;
`

const Div = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BigGlass = styled.img`
    width: 30rem;
    height: 31.3rem;
    
`

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
` 

const Title = styled.h2`
    font-weight: 400;
    font-size: 4rem;
    line-height: 77.45px;
`

const Title2 = styled.h2`
    font-weight: 400;
    font-size: 4rem;
    line-height: 96px;
`

const Span = styled.span`
    font-weight: 700;
    font-size: 6rem;
    line-height: 144px;
    color: #1E3932;
`

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 36px;
`

const DivGlass = styled.div`
    display: flex;
    justify-content: end;
    gap: 50px;
    margin-top: 5rem;
`

const MiniGlass = styled.img`
    height: 113px;
    width: 109px;
`

export default {
    Main,
    Ellipse,
    Div,
    BigGlass,
    Container,
    Title,
    Title2,
    Span,
    Paragraph,
    DivGlass,
    MiniGlass
}