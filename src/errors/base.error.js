// Error object can also be used as a base object for user-defined exceptions.
class BaseError extends Error {
    constructor(name, statusCode, description, details) {
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
    }
}

module.exports = BaseError;

// Error.captureStackTrace(targetObject) => creates a .stack property on targetObject, which when accessed
// returns a string representing the location in the code at which at which Error.captureStackTrace() was called.
