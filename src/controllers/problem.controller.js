const NotImplemented = require("../errors/notImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const NotFound = require("../errors/notFound.error");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Problem Controller is up" });
}

async function addProblem(req, res, next) {
  try {
    console.log(req.body);
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblem(req, res, next) {
  try {
    const id = req.params.id;

    if (id.length != 24) throw new NotFound("Problem", id); // If upcoming id has not a valid objectId

    const problem = await problemService.getProblem(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched a problem",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the problems",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const id = req.params.id;

    if (id.length != 24) throw new NotFound("Problem", id);

    const response = await problemService.deleteProblem(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted a problem",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req, res, next) {
  try {
    const id = req.params.id;
    if (id.length != 24) throw new NotFound("Problem", id);
    const response = await problemService.updateProblem(id, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully updated a problem",
      error: {},
      data: response,
    });
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
  pingProblemController,
};
