import { Request, Response, NextFunction } from "express";
import { ZodType, ZodError } from "zod";

export const validateSchema = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          error: "validation failed",
          details: (error as ZodError).issues.map((err: any) => ({
            field: Array.isArray(err.path) ? err.path.join(".") : "",
            message: err.message,
          })),
        });
        return;
      }
      next(error);
    }
  };
};
