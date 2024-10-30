# Sistema de Mensageria com RabbitMQ

Este projeto demonstra a implementação básica de um sistema de mensageria utilizando RabbitMQ. A aplicação é composta por um produtor que envia mensagens para uma fila e um consumidor que processa essas mensagens.

## Tecnologias Utilizadas

- **RabbitMQ**: Sistema de mensageria que facilita a comunicação assíncrona entre componentes de software.
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **amqplib**: Biblioteca para comunicação com RabbitMQ.

## Funcionalidades

- **Produtor**: Envia mensagens para a fila `tasks`.
- **Consumidor**: Recebe e processa mensagens da fila.
- **Servidor Express**: Permite enviar mensagens através de uma requisição HTTP.

## Pré-requisitos

- [Docker](https://www.docker.com/products/docker-desktop) instalado e rodando.
- Node.js e npm instalados.

## Configuração do Ambiente

### 1. Subindo o RabbitMQ

Utilize o Docker para iniciar uma instância do RabbitMQ com o seguinte comando:

```bash
docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

Acesse o painel de controle do RabbitMQ em [http://localhost:15672](http://localhost:15672) (usuário: `guest`, senha: `guest`).

### 2. Clonando o Repositório

Clone este repositório em sua máquina:

```bash
git clone <https://github.com/Pedrogom7/rabbitmq_mensageria/tree/main>
cd <rabbitmq_messageria>
```

### 3. Instalando Dependências

Instale as dependências necessárias:

```bash
npm install
```

## Execução da Aplicação

### 1. Inicie o Consumidor

Abra um terminal e execute o consumidor:

```bash
node consumer.js
```

### 2. Inicie o Servidor

Em outro terminal, inicie o servidor Express:

```bash
node server.js
```

### 3. Enviando Mensagens

Envie mensagens para a fila `tasks` através de uma requisição POST para `http://localhost:3000/send`. Utilize um cliente HTTP como Postman ou Insomnia, ou um comando curl:

```bash
curl -X POST http://localhost:3000/send -H "Content-Type: application/json" -d '{"message": "Hello, World!"}'
```

## Resumo dos Conceitos de Mensageria

- **Filas**: Estruturas que armazenam mensagens até serem consumidas.
- **Produtor**: Componente que envia mensagens para a fila.
- **Consumidor**: Componente que recebe e processa mensagens da fila.
- **RabbitMQ**: Sistema de mensageria que utiliza filas e exchanges para roteamento de mensagens.

## Contribuições

Sinta-se à vontade para contribuir com este projeto! Faça um fork do repositório, faça suas alterações e envie um pull request.

## Licença

Este projeto está sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

```