const express = require('express');
const cors    = require('cors');
const routes  = require("./routes");

const app = express();

app.use(cors());
app.use(express.json()); // INFORMAR QUE SERÁ UTILIZADO JSON NAS REQUISIÇÕES
app.use(routes);

/**
 * COMMANDS
 * npm install knex
 * npm install sqlite3
 * npm nodemon -D
 */

/**
 * MÉTODOS GET
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Altera uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

 /**
  * TIPO DE PARAMETRO
  * 
  * Query: Parametros nomeados enviados na rota após o "?" (Filtros, paginação, etc...)
  * Routes Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar os recursos
  */

  /**
   * Driver: MySql, SQL Server, Oracle
   * Query Builder: tabel('users').select('*').where()...
   */


  /**
   * QUERY
   */
/*
app.get('/users', (request, response) => {

    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Vitor'
    });
});

/**
 * ROUTE
 */
/*
app.get('/users/:id', (request, response) => {

    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Vitor'
    });
});

/**
 * BODY
 */



app.listen(3333);