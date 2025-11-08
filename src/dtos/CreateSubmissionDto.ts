import z from "zod";

export type createSubmissionSchema = z.infer<typeof createSubmissionDto>;

export const createSubmissionDto = z
  .object({
    userId: z.string(),
    problemId: z.string(),
    code: z.string(),
    language: z.string(),
  })
  .strict();
