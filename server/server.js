require('dotenv').config();

const app = require('./index');

// massive( process.env.CONNECTION_STRING )
//   .then( db => app.set('db', db) )
//   .catch( (error) => console.log(error));

const port = process.env.PORT || 3050;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );