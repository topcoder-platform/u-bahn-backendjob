/**
 * The default configuration file.
 */

module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',

  BUSAPI_URL: process.env.BUSAPI_URL || 'https://api.topcoder-dev.com/v5',
  KAFKA_ERROR_TOPIC: process.env.KAFKA_ERROR_TOPIC || 'common.error.reporting',
  KAFKA_MESSAGE_ORIGINATOR: process.env.KAFKA_MESSAGE_ORIGINATOR || 'backgroundjob.service',

  SKILL_SYNC_TOPIC: process.env.SKILL_SYNC_TOPIC || 'backgroundjob.sync.user.skills',

  AUTH0_URL: process.env.AUTH0_URL || 'https://topcoder-dev.auth0.com/oauth/token', // Auth0 credentials
  AUTH0_AUDIENCE: process.env.AUTH0_TOPCODER_AUDIENCE || 'https://m2m.topcoder-dev.com/',
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  AUTH0_PROXY_SERVER_URL: process.env.AUTH0_PROXY_SERVER_URL,

  DB_NAME: process.env.DB_NAME || 'ubahn-db',
  DB_USERNAME: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || 'password',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 5432,

  REDIS_URL: process.env.REDIS_URL,
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  REDIS_PORT: parseInt(process.env.REDIS_PORT || 6379),
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_USER: process.env.REDIS_USER,
  USER_RECORD_OFFSET: parseInt(process.env.USER_RECORD_OFFSET || 0),
  USER_RECORD_LIMIT: parseInt(process.env.USER_RECORD_LIMIT || 10),
  OFFSET_REDIS_KEY: process.env.OFFSET_REDIS_KEY || 'USER_RECORD_OFFSET',
  SLEEP_TIME: parseInt(process.env.SLEEP_TIME || 1000)
}
