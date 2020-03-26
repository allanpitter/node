const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Metodos HTTP:
 GET: Buscar/listar uma informação
 POST: Criar um informação
 PUT: Alterar uma informação no back-end
 DELETE: Deletar uma informação no back-end
*/

/*
Tipos de parametros

Query Params: parametros nomeados enviados na rota apos o simbolo de interrogação "?"
e serverm para (filtros, paginacao )

Route Params: Parametros utilizados para identificar recursos

Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

/*
     SQL: MySQL, SQLite
*/

/**
 * Driver: SELECT * FROM users
 * QUERY BUILDER: table('users').select('*').where()
 */



app.listen(3333);