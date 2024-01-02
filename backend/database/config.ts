// database/config.ts
import { CountryModel } from "../src/models/country";
import { Sequelize } from 'sequelize-typescript';

let databaseConnect: Sequelize;

async function connectToDatabase() {
  const username = process.env.DB_USERNAME || 'root';
  const password = process.env.DB_PASSWORD || 'root';
  const database = process.env.DB_NAME || 'dev_db';
  const host = process.env.DB_HOST || 'docker_db';

  

  databaseConnect = new Sequelize({
    host,
    dialect: 'mysql',
    username,
    password,
    database,
    models: [CountryModel],
   
  });

  try {
    await databaseConnect.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    await databaseConnect.sync();
    console.log('Sincronización de modelos completada.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }

  return databaseConnect;
}

async function disconnectFromDatabase() {
  if (databaseConnect) {
    try {
      await databaseConnect.close();
      console.log('Conexión a la base de datos cerrada correctamente.');
    } catch (error) {
      console.error('Error al cerrar la conexión a la base de datos:', error);
    }
  }
}

export { connectToDatabase, disconnectFromDatabase, databaseConnect };
