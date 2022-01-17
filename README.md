# Iniciando com TypeScript

Estudando typescript utilizando guia da Rocketseat disponibilizado no [canal do YouTube](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg).

[![](rocketseat.png)](https://app.rocketseat.com.br/)
## TypeScript, o início, de forma prática | [MasterClass #07](https://www.youtube.com/watch?v=0mYq5LrQN1s)

Abaixo iniciarei uma série de anotações que ficará registrado como um guia pessoal de estudo baseado nas explicações de Diego Fernandes, CTO e Instrutor na Rocketseat.

[![](https://avatars.githubusercontent.com/u/2254731?v=4)](https://github.com/diego3g)

[_**GitHub de Diego Fernandes**_](https://github.com/diego3g)

### Iniciando o projeto

1. yarn init -y
2. yarn add -D typescript

### Configurando do Backend

1. yarn add @types/express -D

    Adicionado o pacote de declaração de tipos para utilização das tipagens durante o desenvolvimento do projeto.

    Dessa forma é possível importar a biblioteca normalmente:

    **import express from 'express';**

2. tsc --init

    Será criado um pacote de configuração chamado tsconfig.json.

    Ainda no tsconfig.json, descomentar o **"outDir": "./"** para escolher o diretório onde serão salvos os arquivos compilados.

3. yarn tsc

    Para conversão de typescript para javascript.

4. yarn add ts-node-dev -D

    Biblioteca utilizada para atualizar as modificações do projeto de maneira automática, sem a necessidade de reestartar o servidor.

    Essa biblioteca substitui o nodemon que é utilizado em projetos com javascript puro.

5. Criando um script para facilitar a utilização do **ts-node-dev**

    "dev:server": "ts-node-dev --respawn --transpile-only src/index.ts"

    scripts são colocados no arquivo package.json.

    **yarn dev:server** executa o script.

### Configurando o frontend

1. yarn create react-app frontend --template=typescript

2. yarn add cors
    
    Para permitir quais urls acessarão o backend.

3. yarn add @types/cors -D

    Para instanciar a tipagem do cors ao projeto.

4. yarn add axios
    
    Biblioteca utilizada para fazer chamadas à API.