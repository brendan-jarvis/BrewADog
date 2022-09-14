import knex from 'knex';
import config from './knexfile'
import env from process.env.NODE_ENV || 'development'
import connection from knex(config[env])

export default connection