const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  // The reason that we are keeping problemRepository as ProblemService property, is that currently we are dealing with mongodb database but what if we need to interact with some other database
  // Then our problemservice will automatically have correponding problemRepository.
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

// Here we dont need error handling explicitly unless it is required, since the error handling has already been done in problemRepository class.
  async createProblem(problemData) {
    // 1. Sanitize the markdown for description
    problemData.description = sanitizeMarkdownContent(problemData.description);

    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }
  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }
}

module.exports = ProblemService;
