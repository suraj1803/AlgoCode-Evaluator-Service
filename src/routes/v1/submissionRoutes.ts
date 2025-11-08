import express, { Request, Response } from "express";
import { addSubmission } from "../../controllers/submissionController";
import { validateCreateSubmissionDto } from "../../validators/createSubmissionValidator";
import { createSubmissionDto } from "../../dtos/CreateSubmissionDto";

const submissionRouter = express.Router();

submissionRouter.post(
  "/",
  validateCreateSubmissionDto(createSubmissionDto),
  addSubmission,
);

export default submissionRouter;
