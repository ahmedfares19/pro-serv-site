require('dotenv').config()
const env = {
    SERVER_PORT :process.env.PORT,
    DB_NAME:process.env.DB_NAME,
    DB_PORT:process.env.DB_PORT,
    HOST_IP:process.env.HOST_IP,
    LOG_LEVEL:process.env.LOG_LEVEL,
    DEBUG_LOGS:process.env.DEBUG_LOGS,
    ERROR_LOGS:process.env.ERROR_LOGS
}
module.exports = env