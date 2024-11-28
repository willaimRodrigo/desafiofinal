# Desaio Final Starbucks

Essa é uma aplicação ministrada pela escola (_VaiNaWeb_). Com Rotas, Estados, Condicionais.

### Tecnologias Usadas

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)


## Sobre o projeto

Esse é um desafio no módulo de react usando o __useState__, o hook do react na prática. O desafio consite em usar o useState para alterar o estado da variavél e alterar os valores utilizando o clique para alterar a imagem do copo e a ellipse de fundo dele conforme clica nas miniaturas dos copos. As miniaturas tem uma pequena animação e o copo grande também.
Como plus, componentizei com uma página principal e usei __rotas__ para renderizar o conteúdo quando clicado, a página inicia com a __Home__, contendo uma nav que além da home, recebe __Novidades__ e __Sobre__. Clicando em um deles, você é encaminhado para a página referente, contendo informações sobre café e sua loja física. Temos um botão componentizado que é renderizado em todas as páginas, porém, cada pagina tem um link diferente, condizendo com a página oficial da __starbucks__.

### Código

`app` no app apenas chamei o componente __Pages__.

`Page` o page recebe os imports de __RouterMain__ e exporta ele no seu return.

`routerMain` esse componente recebe o Route, Routes e a importação das outras páginas, armazenando o caminho das rotas e seus elementos.

`home` essa página recebe uma __nav__. 

`nav` a nav armazenar uma __ul__ e dentro uma __li__, contendo as partes clicáveis para as crotas usando o hook __Link__, para direcionar para as páginas.

`Novidades e Sobre` são duas páginas, cada uma contém as informações sobre café e loja, e um botão __saiba mais__ direcionando para a página oficial do starbucks.

`Main` um detalhe para a main que recebe o __BrowserRouter__, englobando nosso app e evitando o uso em vários pontos do mesmo, apenas necessitando das rotas em qualquer lugar.

`Lógica de troca dos copos` usei duas variáveis com useState e usei uma __função__ que recebe dois parametro e dentro o __setcopo__ e __setelipse__. Em cada copo miniatura há um evento de __clique__ que quando chamado, chama aquela __função__, passando os dois parametros condizentes com o copo e ellipse que queremos renderizar, deixando dinâmico a troca de copos.

`Style` criei apenas um arquivo de __GlobalStyled__ para resetar tudo e o restante foi consumido por __STyledComponent__, que é componentizado e utilizado em casa arquivo separadamente, facilitando a manutenção do código.
