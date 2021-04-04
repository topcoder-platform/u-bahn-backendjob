const sequelize = require('../src/models/index')
const logger = require('../src/common/logger')

const User = sequelize.models.User

/**
 * import seed data
 */
async function main () {
  try {
    await User.sync()
    const records = require(`./data/User.json`)
    await User.bulkCreate(records)
    logger.info(`import data for User done, record count: ${records.length}`)
  } catch (e) {
    logger.error(e)
    logger.warn(`import data for User failed`)
  }
  process.exit(0)
}

(async () => {
  main().catch(err => console.error(err))
})()
