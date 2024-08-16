
require('dotenv').config();
const express = require('express');
// 
const routes = require('./routes');
const { swaggerUi, specs } = require('./config/swagger');
// const createDatabase = require('./scripts/createDatabase.js')
// const createTables = require('./scripts/createTables.js')
// const insertData = require('./scripts/insertData.js')

// async function main() {
//     try {
//         await createDatabase();
//         await createTables();
//         await insertData();
// } catch (error) {
//     console.log('Erro na execução do processo.', error);
// }

// };

// main();


const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
//   sequelize.authenticate().then(() => {
//     console.log('Database connected');
//   }).catch(err => {
//     console.log('Error: ' + err);
//   });
});

module.exports = app;
