import loja from "../../../assets/lojastarbucks.png";
import { Button } from "../../Button";

import Styles from "./AboutStyles.js";

export const About = () => {
    return (
        <Styles.Section>
            <Styles.Store src={loja} alt="Imagem da loja starbucks em preto e branco"/>
            <Styles.Info>
                <Styles.H3>PREPARAÇÃO</Styles.H3>
                <Styles.H2>Níveis da torra</Styles.H2>
                <Styles.Paragraph>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</Styles.Paragraph>
                <a href="https://www.starbucksathome.com/br/blog/De-onde-vem-o-cafe.html" target="blank">
                    <Button />
                </a>                   
            </Styles.Info>
        </Styles.Section>
    )
}