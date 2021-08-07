# GCity

Dentro do projeto há duas pastas: <br>
api: Contem a api em node. <br>
GCity: Front-End Angular12 <br>

## Requisitos <br>
- Ter o node v12.18.3 ou superior instalado <br>
- Ter o MongoDB Community Server instalado. Baixar em https://www.mongodb.com/try/download/community . <br>
    - Obs: Para o meu desenvolvimento baixei o ZIP e extrai na a pasta do projeto. <br>
- Ter o Angular12 CLI instalado. Para instalar basta executar via terminal o comando: npm install -g @angular/cli <br>
- Na primeira vez que for executar o projeto no PC <br>
    - Acesse a pasta api via termial e execute o comando: npm install, e aguarde a conclusão. <br>
    - Acesse a pasta GCity via termial e execute o comando: npm install, e aguarde a conclusão. <br>

## 1° Passo - Iniciar o serviço do mongodb <br>
- Copie o caminho completo da pasta data, que está na pasta api. <br>
    - Ex: C:/Users/AlisonGalvani/Documents/trade/api/data <br>
- Pelo terminal, navegue até a pasta de instalação do mongodb e entre na pasta bin  <br>
    - Ex: C:/Users/AlisonGalvani/Documents/Trade/mongodb/bin <br>
- Ainda no terminal, inicie o serviço com o comando: mongod --dbpath CAMINHO_DA_PASTA_DATA <br>
    - Ex: mongod --dbpath C:/Users/AlisonGalvani/Documents/trade/api/data <br>

## 2° Passo - Iniciar a api node <br>
- Pelo terminal, navegue até a pasta api <br>
- Inicie a api com o comando: node server.js <br>

## 3° Passo - front-end Angular <br>
- Pelo terminal, navegue até a pasta GCity <br>
- Execute o comando: npm start <br>
- No navegador, acesse o endereço http://localhost:4200/ <br>


## Observações <br>
Não fiz o projeto baseado em TDD. TDD é algo novo para mim, e os breves estudos que fiz não foram suficientes pra que eu me sentisse confortavel em entregar algo bom. Então optei por entregar o restante do projeto dado o prazo que eu tinha. <br>
Eu tambem nunca havia trabalhado com bancos não relacionais, então tambem foi algo novo e que não tenho experiencia, mas achei relativamente tranquilo.
