const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT || 3000,
    ATLAS_DB_URL : process.env.ATLAS_URL,
    NODE_ENV : process.env.NODE_ENV || 'development'
}