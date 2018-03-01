require('dotenv').config();

const app = require('./app')

const port = process.env.PORT || 3050;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );