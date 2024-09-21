const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class InternalServer extends BaseError {
    constructor(details) {
        super("BadRequest", StatusCodes.INTERNAL_SERVER_ERROR, `Something went wrong`, details);
    }
}

module.exports = InternalServer;