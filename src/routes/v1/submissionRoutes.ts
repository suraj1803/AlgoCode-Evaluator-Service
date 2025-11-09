import express, { Request, Response } from "express";
import { addSubmission } from "../../controllers/submissionController";
import { validate} from "../../validators/createSubmissionValidator";
import { createSubmissionDto } from "../../dtos/CreateSubmissionDto";

const submissionRouter = express.Router();

submissionRouter.post(
  "/",
  validate(createSubmissionDto),
  addSubmission,
);

export default submissionRouter;
