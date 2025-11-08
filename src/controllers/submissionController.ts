import { Request, Response } from "express";
import { createSubmissionSchema } from "../dtos/CreateSubmissionDto";

export function addSubmission(req: Request, res: Response) {
  const submissionDto = req.body as createSubmissionSchema;

  // TODO: Add validation using zod

  return res.status(201).json({
    success: true,
    error: {},
    message: "Successfully collected the sumission",
    data: submissionDto,
  });
}
