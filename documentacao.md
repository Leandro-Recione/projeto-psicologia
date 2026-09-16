Plataforma de Acompanhamento de Pacientes

Sobre o projeto

O projeto consiste no desenvolvimento de uma plataforma destinada à centralização, organização e gerenciamento de informações relacionadas ao acompanhamento de pacientes na área da saúde, inicialmente com foco no atendimento psicológico.

A proposta surge da necessidade de facilitar o armazenamento e o acesso às informações dos pacientes, reunindo diferentes tipos de dados em um único ambiente digital.

Objetivo

Desenvolver uma solução digital capaz de centralizar informações, documentos, anotações e metas em uma única plataforma, contribuindo para uma gestão mais organizada dos pacientes e para o acompanhamento sistemático de cada caso.

O projeto também busca estabelecer uma base que permita futuras expansões para diferentes profissionais e áreas da saúde.

Funcionalidades

Gerenciamento de psicólogos

Cada psicólogo possuirá uma área individual para gerenciamento de seus pacientes.

Cadastro e gerenciamento de psicólogos

Área individual para cada profissional

Associação dos pacientes ao respectivo psicólogo

Gerenciamento de pacientes

Cada paciente possuirá um perfil contendo informações relevantes para seu acompanhamento.

Dados cadastrais

Fotografia

Descrição do caso

Motivo do acompanhamento

Necessidades apresentadas pelo paciente

Histórico de informações relacionadas ao acompanhamento

Documentos

O sistema permitirá o armazenamento e gerenciamento de documentos relacionados ao paciente.

Exemplos:

Laudos

Relatórios

Documentos complementares

Outros arquivos pertinentes ao acompanhamento

Anotações

O psicólogo poderá registrar anotações relacionadas ao acompanhamento de cada paciente, mantendo um histórico organizado das informações consideradas relevantes durante os atendimentos.

Tarefas, objetivos e metas

O profissional poderá definir atividades e metas individuais para cada paciente.

Criação de tarefas

Definição de objetivos

Definição de metas

Acompanhamento do progresso

Registro da evolução ao longo do tempo

Tecnologias utilizadas

Back-end

Node.js

NestJS

TypeScript

Banco de dados

MariaDB

TypeORM

Ferramentas

Git

GitHub

Visual Studio Code

Postman

Estrutura inicial

A aplicação será desenvolvida utilizando a arquitetura modular do NestJS, buscando manter uma organização clara entre os diferentes recursos do sistema.

Exemplo de módulos previstos:

src/
├── app/
├── psicologo/
├── paciente/
├── documento/
├── anotacao/
├── tarefa/
└── ...

A estrutura poderá ser alterada conforme o desenvolvimento do projeto e a definição das responsabilidades de cada módulo.

Banco de dados

O banco de dados será desenvolvido utilizando MariaDB, com TypeORM para o mapeamento entre as entidades da aplicação e as tabelas do banco.

Entre as principais entidades previstas estão:

Psicólogo

Paciente

Documento

Anotação

Tarefa

Objetivo

Meta

Os relacionamentos entre essas entidades serão definidos de acordo com as regras de negócio da aplicação.

Desenvolvimento

O projeto será desenvolvido de forma incremental, começando pela estrutura básica da aplicação e evoluindo conforme as funcionalidades forem implementadas.

Principais etapas:

Configuração do projeto NestJS

Configuração do banco de dados

Configuração do TypeORM

Criação das entidades

Definição dos relacionamentos

Desenvolvimento dos módulos

Criação das rotas e serviços

Implementação das regras de negócio

Implementação da autenticação e autorização

Testes da API

Documentação

Melhorias e futuras funcionalidades

Futuras expansões

A arquitetura do projeto será desenvolvida visando permitir futuras expansões, como:

Suporte a outros profissionais da saúde

Novas categorias de informações

Novos tipos de documentos

Histórico mais detalhado de acompanhamento

Relatórios

Controle de permissões

Notificações

Dashboard de acompanhamento

Outras funcionalidades relacionadas à gestão de pacientes

Status

Em desenvolvimento.

Projeto desenvolvido com finalidade de estudo, prática de desenvolvimento back-end e aplicação de conceitos de arquitetura, organização de código, banco de dados e desenvolvimento de APIs.