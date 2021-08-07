#GCity

Dentro do projeto há duas pastas:
api: Contem a api em node. Dentro dessa pasta inseri tambem o mongodb (BD não relacional utilizado)
GCity: Front-End Angular12

Requisitos
-Ter o node v12.18.3 ou superior instalado
-Ter o MongoDB Community Server instalado. Baixar em https://www.mongodb.com/try/download/community .Obs: Para o meu desenvolvimento baixei o ZIP e extrai na a pasta do projeto.
-Ter o Angular12 CLI instalado. Para instalar basta executar via terminal o comando: npm install -g @angular/cli
-Na primeira vez que for executar o projeto no PC
    ->Acesse a pasta api via termial e execute o comando: npm install, e aguarde a conclusão.
    -> Acesse a pasta GCity via termial e execute o comando: npm install, e aguarde a conclusão.

1° Passo - Iniciar o serviço do mongodb
- Copie o caminho completo da pasta data, que está na pasta api.
    ->Ex: C:/Users/AlisonGalvani/Documents/trade/api/data
- Pelo terminal, navegue até a pasta de instalação do mongodb e entre na pasta bin 
    ->Ex: C:/Users/AlisonGalvani/Documents/Trade/mongodb/bin
- Ainda no terminal, inicie o serviço com o comando: mongod --dbpath CAMINHO_DA_PASTA_DATA
    ->Ex: mongod --dbpath C:/Users/AlisonGalvani/Documents/trade/api/data

2° Passo - Iniciar a api node
- Pelo terminal, navegue até a pasta api
- Inicie a api com o comando: node server.js

3° Passo - front-end Angular
- Pelo terminal, navegue até a pasta GCity
- Execute o comando: npm start
- No navegador, acesse o endereço http://localhost:4200/


Observações: Não fiz o projeto baseado em TDD. TDD é algo novo para mim, e os breves estudos que fiz não foram suficientes pra que eu me sentisse confortavel em entregar algo bom. Então optei por entregar o restante do projeto dado o prazo que eu tinha.
Eu tambem nunca havia trabalhado com bancos não relacionais, então tambem foi algo novo e que não tenho experiencia, mas achei relativamente tranquilo.