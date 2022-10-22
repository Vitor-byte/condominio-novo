import {Router} from "express";
import {condominoControlador} from "../controladores/condomino-controlador";

const router = Router();

// Condomino
router.post("/condomino", new condominoControlador().incluir);



export{router};