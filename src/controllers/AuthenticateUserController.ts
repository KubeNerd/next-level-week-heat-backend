import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController{
    async handle(req:Request, res:Response){

        const { code } = req.body;
        const service = new  AuthenticateUserService();
        try {
            const result = await service.execute(code);
            return res.status(201).json(result)
            
        } catch (error) {
            return res.status(401).json({error:error.message})
        }

    }
}

export { AuthenticateUserController };