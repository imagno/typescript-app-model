import { Request, Response } from "express";

const users = [
  { name: 'imagno', email: 'imagno@email.com.br' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
};