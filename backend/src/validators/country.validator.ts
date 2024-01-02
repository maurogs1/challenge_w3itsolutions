import { NextFunction, Request, Response } from "express";

const { check, validationResult } = require('express-validator');

export const validateSearchParams = [
  check('name')
    .notEmpty().withMessage('El nombre es requerido')
    .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        // console.log(errors.array().map((e: { msg: any; }) => e.msg));
            return res.status(204).send(errors.array().map((e: { msg: any; }) => e.msg));
        }
        next();
    }
];