// Update with your config settings.
'use strict';
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/qthreeass'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/qthreeass'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
