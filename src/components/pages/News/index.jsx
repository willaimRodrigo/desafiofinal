import grao from "../../../assets/graocafe.png";
import { Button } from "../../Button";

import Styles from "./NewsStyle.js";

export const News = () => {
    return (
        <Styles.Section>
            <Styles.Grao src={grao} alt="Grão de café"/>
            <Styles.News>
                <Styles.H3>PREPARAÇÃO</Styles.H3>
                <Styles.H2>Níveis da torra</Styles.H2>
                <Styles.Paragraph>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</Styles.Paragraph>
                <a href="https://www.starbucksathome.com/br/blog.html" target="blank">
                    <Button />
                </a>  
            </Styles.News>
        </Styles.Section>
    )
}