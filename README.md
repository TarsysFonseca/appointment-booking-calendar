# appointment-booking-calendar

A interface desse projeto está implementada em **Vue** e um mock de serviço foi implementado utilizando **Node** e **Express**.

## Rodando o serviço
Uma vez na raiz do projeto:

```
cd server
npm install

npm run start
```

Duas rotas estaram disponíveis:
* http://localhost:3000/professionals
* http://localhost:3000/availability-table


Em caso de CORS entre o **app** e o **server**, basta alterar a `linha 6` do `server/app.js` para o porta localhost que estiver rodando a aplicação Vue.


## Rodando a aplicação
Uma vez na raiz do projeto:

```
cd app
npm install

npm run serve
```

A aplicação estará disponível na porta http://localhost:8080/