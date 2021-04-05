/**
 * The application entry point
 */
const { promisify } = require('util')
const redis = require('redis')
const config = require('config')
const logger = require('./common/logger')
const helper = require('./common/helper')
const _ = require('lodash')
const sequelize = require('./models/index')

const User = sequelize.models.User

/**
 * Send user skill event
 */
async function main() {
  const redis_url = config.REDIS_URL
  let offset = config.USER_RECORD_OFFSET
  let client
  if (redis_url) {
    client = redis.createClient(redis_url)
  } else {
    client = redis.createClient({ host: config.REDIS_HOST, port: config.REDIS_PORT, password: config.REDIS_PASSWORD, user: config.REDIS_USER })
  }
  const offsetFromRedis = await promisify(client.get).bind(client)(config.OFFSET_REDIS_KEY)
  if (offsetFromRedis) {
    offset = offsetFromRedis
  }
  logger.info(`Start with offset: ${offset}`)
  const users = await User.findAll({ offset, limit: config.USER_RECORD_LIMIT })
  try {
    for (const user of users) {
      await helper.postEvent(config.SKILL_SYNC_TOPIC, _.pick(user, ['id', 'handle', 'firstName', 'lastName']))
      offset++
      await new Promise((resolve) => setTimeout(resolve, config.SLEEP_TIME))
    }
  } catch (e) {
    logger.warn(`Send user skill event failed, when offset is ${offset}`)
  } finally {
    await promisify(client.set).bind(client)(config.OFFSET_REDIS_KEY, offset)
    client.end(true)
    logger.info('Successfully send user skill event')
  }
}

(async () => {
  main().catch(err => console.error(err))
})()
