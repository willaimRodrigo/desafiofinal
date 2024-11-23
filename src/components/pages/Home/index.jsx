import laranjag from "../../../assets/laranja2x1.png";
import laranja from "../../../assets/laranja.png";
import vermelhog from "../../../assets/vermelho2x1.png";
import vermelho from "../../../assets/vermelho2.png";
import amarelog from "../../../assets/amarelo2x1.png";
import amarelo from "../../../assets/amarelo2.png";
import elipseverde from "../../../assets/elipseverde.png";
import elipseamarela from "../../../assets/Ellipseama.png";
import elipsevermelha from "../../../assets/Ellipseverm.png";

// import insta from "../../../assets/insta.png";
// import linkedin from "../../../assets/linkedin.png";
// import github from "../../../assets/github.png";

import Styles from "./HomeStyles";

import { Button } from "../../Button";
import { useState } from "react";

export const Home = () => {
    const [cicle, setCicle] = useState(elipseverde);
    const [glass, setGlass] = useState(laranjag);

    const change = (cicleImage, glassImage) => {
        setCicle(cicleImage);
        setGlass(glassImage);
    }

    return (
        <Styles.Main>
            <Styles.Div>
                <Styles.BigGlass src={glass} alt="Copo de bebida da starbucks com chantilin em cima" />
                <Styles.Ellipse src={cicle} alt="Semi-circulo de cor primária" />  
            </Styles.Div>
            
            {/* <div>
                <img src={insta} alt="Icone do instagran" />
                <img src={linkedin} alt="Icone do linkedin" />
                <img src={github} alt="Icone do github" />
            </div> */}
            <Styles.Container>
                <div>
                    <Styles.Title>Mais que Café Aplicar efetios giratórios no copo</Styles.Title>
                    <Styles.Title2>Isso é <Styles.Span>Starbucks</Styles.Span></Styles.Title2>
                    <Styles.Paragraph>A Starbucks oferece uma variedade de cafés de alta qualidade. 
                        Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso.
                        Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
                    </Styles.Paragraph>
                    <Button />
                </div>
                <Styles.DivGlass>
                    <Styles.MiniGlass src={laranja} 
                    alt="Copo de bebida da starbucks com chantilin em cima" 
                    onClick={() => change(elipseverde ,laranjag)}
                    />
                    <Styles.MiniGlass src={vermelho} 
                    alt="Copo de bebida da starbucks com chantilin em cima" 
                    onClick={() => change(elipsevermelha, vermelhog)} 
                    />
                    <Styles.MiniGlass src={amarelo} 
                    alt="Copo de bebida da starbucks com chantilin em cima" 
                    onClick={() => change(elipseamarela, amarelog)} 
                    />
                </Styles.DivGlass>
            </Styles.Container>
        </Styles.Main>
    )
}