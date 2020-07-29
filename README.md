# Twitter Hashtag Watcher (Frontend)

## Sobre o projeto

O objetivo é criar um aplicação controle que receba tweets com determinada hashtag e que, após serem aprovados, sejam mostrados em um telão.

O frontend foi desenvolvido em ReactJS fazendo uso de websockets para comunicação com o backend.

O backend da aplicacao está disponível [aqui](https://github.com/viclen/twitter-hashtag-watcher-backend).

## Demo

A imagem a seguir mostra a tela de moderaçao dos tweets:

![Admin Panel](./git-img/admin.png)

E essa é a visualização do telão.
![Screen View](./git-img/screen.png)

## IA

A inteligência artificial desse projeto foi feita usando duas ferramentas:

### Bert - Natural Language Processing

A IA da google para processamento, compreensão e análise de linguagem natural. Esse recurso foi desenvolvido em python e está disponível [aqui](https://github.com/viclen/nlp-twitter-python).

### Vader Sentiment Analysis

Em conjunto com a IA de linguagem natural, foi usado o [VaderSentiment](https://github.com/cjhutto/vaderSentiment) para fazer a análise do tweet dentro do próprio servidor Node.js.

## Primeiros passos

Antes de iniciar a aplicação, edite o arquivo `.env-example` alterando a variável REACT_APP_SERVER para o endereço IP do backend. Após isso, renomeie o arquivo para `.env`.

### Instalação

Para instalar as dependências do projeto, basta rodar o seguinte comando:

Usuários de yarn:
`yarn`

Usuários de npm:
`npm install`

## Comandos

### Rodar servidor

Usuários de yarn:
`yarn start`

Usuários de npm:
`npm run start`

### Fazer a build do projeto

Usuários de yarn:
`yarn build`

Usuários de npm:
`npm run build`

Os arquivos da build serão salvos na pasta build.

### Rodar uma build do projeto

Se você quiser servir somente a build do projeto, use o comando:

Usuários de yarn:
`yarn serve`

Usuários de npm:
`npm run serve`
