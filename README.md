# Mãos que Transformam

Projeto acadêmico de desenvolvimento web para uma ONG fictícia chamada **Mãos que Transformam**.

## Objetivo

O projeto tem como objetivo apresentar uma organização social fictícia, seus projetos e uma área para cadastro de voluntários.

A aplicação foi desenvolvida como atividade acadêmica, utilizando tecnologias de desenvolvimento web e conceitos de organização de código, validação de formulários, responsividade e controle de versões.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Estrutura do projeto

projeto.ong/
├── index.html
├── cadastro.html
├── projetos.html
├── imagem/
│   └── imagens/
├── css/
│   └── style.css
└── js/
    ├── app.js
    ├── mascaras.js
    ├── menu.js
    ├── script.js
    ├── storage.js
    ├── templates.js
    └── validacao.js

## Funcionalidades

- Navegação entre as páginas do projeto.
- Apresentação dos projetos sociais da organização.
- Formulário para cadastro de voluntários.
- Validação dos campos obrigatórios.
- Máscaras para CPF, telefone e CEP.
- Menu responsivo.
- Feedback visual após o envio do formulário.
- Armazenamento da última rota acessada utilizando localStorage.

## Controle de versões

O projeto utiliza Git para controle de versões e segue uma estrutura baseada no GitFlow.

### Branches utilizadas

- master: representa a versão estável do projeto.
- develop: utilizada para integração do desenvolvimento.
- feature/melhoria-formulario: utilizada para desenvolver uma melhoria específica no formulário.
- feature/documentacao-readme: utilizada para criação da documentação do projeto.
- hotfix/correcao-urgente: utilizada para corrigir um problema identificado na versão estável.

### Commits semânticos

Foram utilizados tipos de commits semânticos para facilitar a identificação das alterações:

- feat: criação ou melhoria de funcionalidade.
- fix: correção de problemas.
- chore: tarefas de manutenção e organização.

Exemplos utilizados no projeto:

chore: adiciona estrutura inicial do projeto
feat: melhora orientacao do formulario
fix: corrige identificacao do formulario

## Versionamento

A primeira versão estável do projeto foi identificada com a tag:

v1.0.0

## GitHub

O projeto possui um repositório remoto no GitHub para armazenamento do código e gerenciamento das branches.

O fluxo utilizado permite desenvolver funcionalidades em branches específicas e integrá-las posteriormente à branch de desenvolvimento.

## Pull Requests

As Pull Requests são utilizadas para propor a integração de alterações desenvolvidas em branches específicas para a branch de desenvolvimento.

Esse processo permite revisar as alterações antes da integração e mantém o histórico do projeto organizado.
