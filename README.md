# Testando Projeto ReactJS usando vite, vitest e testing library

## ❤️ O que são testes unitários?

Testes unitários são testes realizados de forma isolada para garantir qualidade para pequenas partes do seu código, como as funções, as classes e por aí vai.

## 3  benefícios de realizar testes unitários:

 - Encontrar e corrigir bugs, otimizando o tempo da pessoa QA
 - Aumentar a confiabilidade da sua aplicação
 - Servir como documentação

Aqui nessa aula a gente vai praticar como testar interface de pessoas usuárias com react testing library. 
Vamos aprender como fazer os testes unitários dos componentes numa aplicação bem simples em react. 


## Ferramentas:
Vamos usar o `vitest` como ambiente para rodar nossos testes. Esta é uma alternativa ao Jest(a ferramenta mais famosa de testes), para projetos criados com vite.  Se você não conhece o vitest, se liga no que sua própria documentação diz sobre ele:

`Vitest é uma estrutura de teste de unidade extremamente rápida, desenvolvida pela Vite.`

Já para criação do testes a gente vai  automatizar a forma como a pessoa usuária poderia interagir com a nossa tela. 

Pra isso vamos usar o `testing library react` que segundo a documentação é:

`Uma família completa de pacotes para criar testes utilizando boas praticas centradas no comportamento da pessoa usuária.`

## Entendendo um teste unitário

> Bloco de teste

- Renderizar o componente que queremos testar
- Encontrar os elementos que queremos interagir
- Interagir com esses elementos
- Afirmar o resultado esperado

> describe, test e expect

- describe serve para criarmos um conjunto de testes
- test serve para criar um caso de teste
- expect serve para descrever o que esperamos com resultado ideal para aquele teste

> screen, render, userEvent, queryBy.../findBy..., toBeInTheDocument/toHaveTextContent

- screen é o que nos permite visualizar a tela e a partir daí encontrar os nós do DOM
- render é o metodo que renderiza nosso componente no ambiente de testes
- userEvent simula alguns eventos e interações da pessoa usuária
- queryBy.../findBy... são as queries, alguns dos muitos metódos que nos ajudam a encontrar, buscar, trazer um ou mais elementos da tela
- toBeInTheDocument/toHaveTextContent são os matchers, alguns dos muitos metodos que nos ajudam a comparar o resultado esperado com o resultado recebido. Eles nos ajudam também com o log de mensagens de erro.

---
# Para reproduzir esse projeto:

  `Passo 1`: Faça o fork e clone o repositório

  `Passo 2`: Baixe as dependências

 ```
  npm i
 ```

 `Passo 3`: Como rodar os testes

```

 npm run test

 ```

 ```

 npm run test:ui

 ```

 `Passo 4`: Como rodar o projeto

```

 npm run dev

 ```

 
## O Projeto e os casos de testes realizados:

 ![image](https://media.giphy.com/media/hyPmJQnEOJgs8ziVW0/giphy.gif)
 ![image](https://media.giphy.com/media/20nEjUfP5zfJZ8xLz7/giphy.gif)

O mais legal é que os testes estão garantindo os cenários abaixo:

✅ Quando a tela carrega, o componente renderiza corretamente com todos os elementos?

✅ A imagem está acessível com o texto alternativo?

✅ O input funciona capturando o valor digitado?

✅ Após a usuária digitar o nome, o texto renderiza corretamente na tela?



_Foi incrível compartilhar essa jornada com você! Qualquer dúvida ou sugestão, chama no contatinho!_

### Saudações, Simara!

 <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

Professora na {reprograma} e na PretaLab, desenvolvedora na Thoughtworks e criadora do Canal e Podcast Quero Ser Dev.

Vamos nos conectar!

- [youtube](https://www.youtube.com/channel/UCGaPf6u8sp-yd5BvOS3du0g)
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)

<br>
Feito com 💜 por Simara Conceição
