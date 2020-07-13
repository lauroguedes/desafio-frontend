# 🏁 Desafio de programação - Vaga Front-End 🏁

**Este teste tem por objetivos principais avaliar:**

- Habilidades no desenvolvimento frontend
- Conceitos de UI e UX aplicados

---

## Instruções

- Primeiro, faça um fork deste projeto para sua conta no Github (crie uma se você não possuir).
- Em seguida, implemente o projeto tal qual descrito abaixo, em seu clone local.
- Por fim, envie via email um arquivo patch para seu contato na Bycoders\_.

---

## Desafio 🚀 🚀 🚀

![screen](/image.png)

O desafio consiste em criar um projeto com o design da imagem **acima**, utilizando a [API do YouTube](https://developers.google.com/youtube/v3)

Utilize a [documentação](https://developers.google.com/youtube/v3/docs) para se orientar em como criar uma conta, logar no app, listar os vídeos do usuário, se inscrever em canais, enviar vídeos, ou o que mais você precisar.

O layout da **home** não precisa ser exatamente como o do wireframe. Você pode ficar a vontade para exibir os conteúdos/vídeos que achar melhor, desde que qualquer informação (vídeo, texto, cores, imagens) sejam exibidos de maneira organizada e bem distribuida entre a tela, fornecendo uma boa experiência para o usuário.

**Antes de iniciar o teste**

1. Crie um projeto no [console de desenvolvedor](https://console.developers.google.com/projectcreate) da **Google**
2. Ative a [YouTube Data API v3](https://console.developers.google.com/apis/api/youtube.googleapis.com/overview) nele
3. Crie uma credencial de acesso para que seu app possa se comunicar com a API

**Requisitos esperados na entrega do teste**

- [x] Fornecer um mecanismo para o usuário poder pesquisar vídeos
- [x] Possuir home page que exiba algum conteúdo interessante para uma plataforma de vídeos
- [x] Fornecer uma estrutura de gerência do estado da aplicação
- [x] Possuir histórico das buscas realizadas (persistir localmente)

**Requisitos extras**

- [ ] Permitir cadastro de usuário / login através da API do YouTube + OAuth2
- [ ] Permitir upload de vídeo para a API do YouTube

---

## Pontos principais

- Clean code
- Conhecimento de boas práticas / design patterns
- Demonstração de boa gestão do estado do app

---

## Pontos extras

- Uso de frameworks / libs
- Testes
- Componetização do app
- Uso de linters

---

## Youtube Clone - Desafio FrontEnd

Nessa aplicaçao foi desenvolido uma integraçao simples com a API do Youtube, permitindo realizar buscas de todos os videos, videos mais populares e pesquisas especificas. Além de ter uma lista de hisórico de buscas persistindo em localStorage e gerenciada pelo Vuex.

![Tela Youtube Clone](/desafio-front-tela.gif)

Acesse a [Demo](https://desafio-youtubeclone.netlify.app)

### Foi utilizado para esse desafio

- [VueJs](https://vuejs.org)
- [NuxtJS](https://nuxtjs.org)
- [ESLint](https://eslint.org)
- [Ant Design](https://antdv.com/docs/vue/introduce/)
- [Axios](https://axios.nuxtjs.org)
- [Vuex](https://vuex.vuejs.org)
- [Moment.js](https://momentjs.com)
- [Docker](https://www.docker.com)

#### Build Setup

```
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# Para utilizar com docker (Aplicação irá rodar na porta 5000)
$ docker-compose up
```
