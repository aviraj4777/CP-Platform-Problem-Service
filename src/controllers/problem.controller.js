const { statusCodes } = require('http-status-code');
const NotImplemented = require('../errors/notImplemented.error');

function pingProblemController(req, res) {
    return res.json({message: 'Problem Controller is up'});
}

function addProblem(req, res, next) {
    try {
        throw new NotImplemented('Add Problem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        throw new NotImplemented('Get Problem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        throw new NotImplemented('Get Problems');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        throw new NotImplemented('Delete Problem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        throw new NotImplemented('Update Problem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}