# Desafio Front-end: DataTable

Este projeto é uma implementação de um DataTable em React, desenvolvido como parte de um desafio front-end.

Ele utiliza TypeScript e Styled-Components para criar uma interface simples, exibindo um data table que permite fazer consultas através de um campo de busca.

Os dados são buscados através de uma API utilizando JSON Server.

## Iniciando o Projeto

Antes de começar, certifique-se de ter o Node.js, o Yarn e o JSON Server instalados em sua máquina.

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/filipe-louro/desafio-front-end.git
```

2. Acesse o diretório do projeto:

```bash
cd desafio-front-end
```

3. Instale as dependências usando o Yarn:

```bash
yarn install
```

4. Rode o projeto através do yarn:

```bash
yarn start
```

_Inicia a aplicação em modo de desenvolvimento. Abre por padrão o endereço http://localhost:3000 no seu navegador._

5. Inicie o Json-server para utilizar os dados de MockUp na Tabela:

```bash
yarn start:json-server
```

_Inicia o servidor JSON utilizado para simular uma API local. Este projeto usa a ferramenta json-server para fornecer dados para o DataTable._

# Funcionalidades Principais

**DataTable Responsivo**: O DataTable é projetado para ser totalmente responsivo, proporcionando uma experiência de usuário consistente em diferentes dispositivos.

**Busca Dinâmica**: A funcionalidade de busca permite encontrar rapidamente informações no DataTable. A busca é realizada em campos como nome, cargo, data de admissão e número de celular.

# Tecnologias Utilizadas

**React**: Biblioteca JavaScript para criar interfaces de usuário.
**TypeScript**: Superset de JavaScript que adiciona tipagem estática à linguagem.

**Styled Components**: Biblioteca para estilizar componentes React com suporte a CSS-in-JS.

# Estrutura do Projeto

**src/components**: Contém os componentes React, incluindo o DataTable, TableRow e TableHeader.

**src/public**: Armazena recursos estáticos, como imagens e ícones.

**src/interfaces**: Contém as interfaces Typescript para utilizar nos componentes.

**src/styles**: Contém a estilização dos componentes utlizando o Styled Components.

# Observação

Este é um projeto apenas de desafio, sendo feito apenas para concluir um desafio proposto envolvendo a criação de um DataTable utilizando React, TypeScript, Styled Components e JSON Server.
