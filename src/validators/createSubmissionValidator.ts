import * as z from "zod";
import {
  createSubmissionDto,
  createSubmissionSchema,
} from "../dtos/CreateSubmissionDto";
import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

export const validate =
  (schema: ZodType<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        ...req.body,
      });

      next();
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Bad Request",
      });
    }
  };
