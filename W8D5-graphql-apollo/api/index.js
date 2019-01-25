var express = require('express');
var express_graphql = require('express-graphql');

// GraphQL schema
var { schema, root } = require('./schema');

// Create an express server and a GraphQL endpoint
const cors = require('cors')

var app = express();
app.use(cors())

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));


