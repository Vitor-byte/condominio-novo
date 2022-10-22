import { Request, Response } from 'express' 
import { incluirCondominoCaso} from '../casos-uso/condomino/incluir-condomino-caso';

export class condominoControlador{
    async incluir(request: Request, response: Response){
        const resultado = await new incluirCondominoCaso().incluir(request.body);
        return response.status(201).json(resultado);
    }
  
}