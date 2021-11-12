const knex = require('knex');

export const knexConnect = ({
  port = 3306,
  user = 'root',
  database = '',
  client = 'mysql',
  password = 'test',
  host = '127.0.0.1',
}) => knex({
  client, connection: {
    port,
    host,
    user,
    database,
    password,
  }
});
