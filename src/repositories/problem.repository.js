const NotFound = require("../errors/notFound.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      // create method of mongoose creates model and save it to the document (database);
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) throw new NotFound("Problem", id);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteProblem(id) {
    try {
      const res = await Problem.deleteOne({ _id: id });
      if (!res.deletedCount) throw new NotFound("Problem", id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateProblem(id, update) {
    try {
      const oldDoc = await Problem.findById(id);
      if (!oldDoc) throw new NotFound("Problem", id);
      for (const key in update) {
        oldDoc[key] = update[key];
      }
      await oldDoc.save();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
