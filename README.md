# Ecommerce-React-App

## Descrição

Projeto para fins de treinamento utilizando React, Typescript, Next.js, ES6.

## Dependências do sistema

- [NodeJS >= v14.15.4](https://nodejs.org/en/download/)
  - NPM v7.11.2

## Estrutura

    Ecommerce-React-App
    ├── src                            (Diretório principal dos arquivos do projeto)
    │   ├── assets                     (Recursos de folhas de estilo, scripts, fontes e imagens)
    │   ├── components                 (Componentes que não possuem estados, são chamados de dummy components)
    │   ├── router                     (Permite a navegação entre visualizações de vários componentes em um aplicativo React)
    │   ├── service                    (Utilizado para transferir dados através de protocolos de comunicação para diferentes plataformas)
    ├── README.md                      (Breve definição/Documentação)
    └── ...                            (Outros arquivos de configuração)

### Ferramentas

- [React](https://pt-br.reactjs.org/docs/getting-started.html)

- [TypeScript](https://www.typescriptlang.org/)

- [Git](https://git-scm.com/doc)

- [Material-UI](https://material-ui.com/getting-started/installation/)

### Montagem do ambiente de desenvolvimento

O primeiro passo é clonar o projeto utilizando o método HTTPS ou SSH.

SSH

```sh
git clone git@github.com:eosantos/ecommerce-reactjs-app.git
```

HTTPS

```sh
git clone https://github.com/eosantos/ecommerce-reactjs-app.git
```

### Instalar dependências do projeto

Com o comando abaixo instalamos todos os pacotes definidos no package.json para configuração do servidor local:

```sh
npm i
```

### Acessando a aplicação

Para iniciar o projeto basta executar o comando abaixo:

```sh
npm start
```

Após a execução do comando acima basta abrir o link `http://localhost:3000`.

### Commit

Para nossos commits utilizamos a seguinte estrutura:

```
feat: mensagem curta
^--^  ^------------^
|     |
|     +-> Resumo da alteração
|
+-------> Tipos: chore, docs, feat, fix, refactor, style, or test.
```

#### Exemplos:

- `feat/feature`: (novo recurso para o usuário, não um novo recurso para script de compilação)
- `fix`: (correção de bug para o usuário, não uma correção para um script de construção)
- `docs`: (alterações na documentação)
- `style`: (formatação, ponto e vírgula faltando etc; sem alteração do código de produção)
- `refactor`: (refatorando o código de produção, por exemplo, renomeando uma variável)
- `test`: (adicionando testes ausentes, testes de refatoração; nenhuma alteração no código de produção)
- `chore`: (atualização de tarefas e etc; sem alteração do código de produção)
