[![Build Status](https://travis-ci.com/processing/p5.js-website.svg?branch=master)](https://travis-ci.com/processing/p5.js-website)

# p5js website

## Como contribuir

Bugs já conhecidos e intenções de novas funções são monitorados usando o [GitHub issues](https://github.com/processing/p5.js-website/issues). Se você quer começar a trabalhar em um issue deixe um comentário no issue que você pretende trabalhar para que outros colaboradores saibam que esse problema está sendo resolvido e possam oferecer ajuda. Assim que você terminar de resolver esse issue, [faça um pull request (PR)](https://github.com/processing/p5.js/blob/main/contributor_docs/preparing_a_pull_request.md) (em português: pedido para incorporar) ao branch principal do p5.js. No campo de descrição do PR inclua "resolves #XXXX" (em português: "resolve o issue número #XXXX"), marcando o issue que você está consertando. Se o PR não resolve o issue por completo você pode colocar a descrição como "addresses #XXXX" (em português: "referente ao issue número #XXXX").

Se você descobrir um bug ou tem uma ideia para uma nova função que você gostaria de adicionar, comece abrindo um issue. Por favor não faça um pull request contendo a resolução do bug ou a nova função sem abrir um issue antes, nós provavelmente não vamos aceitar o PR. Assim que você tiver alguma resposta sobre o issue e uma autorização para resolvê-lo você pode seguir o processo descrito acima para resolver o bug ou adicionar a nova função.

Nós reconhecemos todos os tipos de contribuição. Esse projeto segue a especificação tipo [all-contributors](https://github.com/kentcdodds/all-contributors). Você pode adicionar a si mesmo no [p5.js repository readme](https://github.com/processing/p5.js/blob/main/README.md#contributors) seguindo [essas instruções](https://github.com/processing/p5.js/issues/2309)!


## Configurações para visualização off-line do site

0. Veja se o Java está instalado. Não está? Visite https://java.oracle.com
1. Instale o [node.js](https://nodejs.org/en/download/).
2. [Clone este repositório](https://help.github.com/articles/cloning-a-repository/).
3. Vá até a pasta `p5.js-website` pelo terminal e digite `npm install`.

## Visualizando o site off-line

Assim que você tiver configurado o site, digite `npm run watch` para rodar o site. Isso deve abrir uma nova janela no seu browser com o site rodando no endereço http://localhost:9000.

## Estrutura de arquivos

* __Veja a not sobre o que incluir nos pull requests [aqui](https://github.com/processing/p5.js/blob/main/contributor_docs/preparing_a_pull_request.md).__
* `src/` – Todas as peças para gerar o site. __Alterações devem ser feitas aqui.__
  * `assets/` – Todos os arquivos fixos (imgs, css, fonts, js, p5_featured homepage sketches)
    * Observação: se você fizer alterações aqui você deve reiniciar o servidor para ver as mudanças. Para ver as mudanças imediatamente você pode editar os arquivos asset na pasta dist mas precisa copiar e colar suas alterações aqui para que sejam salvas.
  * `data/` – arquivos para traduções.
  * `templates/`
    * `layouts/` – default.hbs é o template da página principal.
    * `pages/` – Contém cada uma das páginas do site do p5, estas são inseridas com a tag `{{> body }}` no layout padrão. Note que em algumas páginas (por exemplo: learn, teach e libraries) os arquivos hbs são construídos de arquivos ejs que estão na pasta `data/`. Quando esse for o caso você encontrará um arquivo README dentro da pasta com instruções de como eles funcionam.
    * `partials/` – Estas são partes reutilizáveis que podem ser inseridas em qualquer página ou layout. Elas correspondem a outra tag `{{> filename }}` nas páginas ou no layout padrão.
* `dist/` – É onde as páginas geradas são armazenadas. Estas são geradas via `grunt server` mas não são adicionadas ao pull request por se construírem sozinhas online.
* `Gruntfile.js` – Este arquivo contém todas as tarefas para usar o Assemble e os para os YAML usados no site final. Ele usa o taskrunner [grunt](http://gruntjs.com/).

## Ferramentas

* [Assemble](http://assemble.io/) é usado para construir a parte fixa do site a partir dos layouts e dos arquivos yml.
* [grunt-assemble-i18n](https://github.com/assemble/grunt-assemble-i18n) gera um conjunto de páginas para cada língua especificada no gruntfile baseadas nos templates e nos arquivos yml. A documentação é limitada mas este [examplo](https://github.com/LaurentGoderre/i18n-demo) demonstra bem a sua funcionalidade.
* [assemble-contrib-permalinks](https://github.com/assemble/assemble-permalinks) nos permite customizar os permalinks (estrutura de arquivos do site).

## Adicione a si mesmo como colaborador!

Se você contribuiu com esse website (ou qualquer outra parte do projeto p5.js), adicione a si mesmo [aqui](https://github.com/processing/p5.js#contributors). Instruções para fazer isso podem ser encontradas no final dessa seção.

## Etc
* [Instruções para colaborar com a tradução/internacionalização do website](https://github.com/processing/p5.js-website/blob/main/contributor_docs/i18n_contribution.md)
* [Introducción a p5.js](https://github.com/processing/p5.js-getting-started-es) - Repositório do livro e PDF [Introducción a p5.js](http://p5js.org/books/).

## Externally hosted language versions
* [https://p5js.jp](https://p5js.jp/) - 日本語 (Japanese), traduzido e hospedado por [Katsuya Endoh](https://enkatsu.org/)
*
