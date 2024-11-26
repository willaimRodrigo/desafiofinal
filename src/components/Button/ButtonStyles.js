import styled from "styled-components";

const Button = styled.button`
    margin-top: 30px;
    width: 293px;
    height: 64px;
    border: #037143;
    border-radius: 30px;
    background-color: #037143;

    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 29.05px;

    &:hover {
        color: #990;
    }

    @media (max-width: 450px) {
        width: 12rem;
        height: 3rem;
        font-size: 1.15rem;
    }
`

export default {
    Button
}