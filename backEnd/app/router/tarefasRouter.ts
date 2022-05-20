import { Request, Response, Router } from 'express';
import TarefasController from '../controller/tarefasController';

const tarefasController = new TarefasController();

const userRouter = Router();

userRouter.get(
  '/',
  // auth,
  async (req: Request, res: Response) => {
    await tarefasController.todasTarefas(req, res);
  },
);

userRouter.post(
  '/',
  // auth,
  async (req: Request, res: Response) => {
    await tarefasController.adicionarTarefa(req, res);
  },
);

userRouter.delete(
  '/:id',
  // auth,
  async (req: Request, res: Response) => {
    await tarefasController.removeTarefa(req, res);
  },
);

userRouter.put(
  '/status/:id',
  // auth,
  async (req: Request, res: Response) => {
    await tarefasController.atualizaStatus(req, res);
  },
);

userRouter.put(
  '/:id',
  // auth,
  async (req: Request, res: Response) => {
    await tarefasController.atualizaTarefa(req, res);
  },
);

export default userRouter;
