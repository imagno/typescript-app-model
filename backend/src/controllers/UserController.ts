import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: 'imagno', email: 'imagno@email.com.br' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
    to: { 
      name: 'imagno',
      email: 'imagno@email.com.br'
    },
    message: {
      subject: 'Bem-vindo',
      body: 'Seja bem-vindo ao sistema!'
    }
    });

    return res.send('Usuário criado com sucesso!');
  }
};