<hr>
<h1 align=center>MOVIE WEB APP</h1>
<hr>

## Sobre SPDF
Movie Web App é uma aplicação web desenvolvida com [VUEJS](https://vuejs.org/).
Esta aplicação fornece informações sobre filmes, séries e pessoas relacionadas ao universo do cinema.

## Live Demo
[Acessar Live Demo da aplicação](https://caetano-movie-web-app.herokuapp.com/)


## Executando com  Docker
Para este caso é preciso que o [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/install/) estejam previamente instalados na máquina.

Na pasta raiz do projeto, basta rodar o comando:
```sh
docker-compose up -d
```
ou
```sh
npm run docker
```
Após executar este comando, a imagem será construida, e o container criado.
Além disso, outras coisas que a aplicação precisa pra funcionar como a instalação dos pacotes do arquivo ``` package.json ``` será feita automaticamente. <br />
Caso queira um retorno do que está sendo feito basta remover a flag ``` -d ``` do comando acima. <br />
<small>**obs:** Caso utilize o segundo comando, é preciso que o [NPM](https://www.npmjs.com/) esteja instalado na máquina</small>

#### Acessando a Aplicação
Por padão a aplicação pode ser acessada em:
```sh
http://localhost:8080/
```

#### Executando comandos com NPM
Caso desejado, é possível executar comandos [NPM](https://www.npmjs.com/) dentro do container.
```sh
docker exec -it movie_web_app npm install axios
```

Não é necessário que o [NPM](https://www.npmjs.com/) esteja instalado na máquina host pois esta instalação vem do container.

## Executando sem Docker
#### Requisitos
Para executar esta aplicação em uma máquina sem o docker, será preciso que a máquina antenda ao requisitos abaixo.

- [NODE.JS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

#### Baixando dependências
Na pasta raiz do projeto, execute o comando abaixo. Este irá baixar todas as dependências do projeto.
```sh
npm install
```

#### Acessando a Aplicação
Por padão a aplicação pode ser acessada em:
```sh
http://localhost:8080/
```

## Back-End
Para acessar o código do back-end desta aplicação, basta clicar neste [link](https://github.com/caetanoMatheus/movie-api).
