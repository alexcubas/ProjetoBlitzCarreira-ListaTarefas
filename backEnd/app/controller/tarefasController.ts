import { Request, Response } from 'express';
import TarefasService from '../service/tarefasService';

export default class TarefasController {
  private tarefasService: TarefasService;

  constructor() {
    this.tarefasService = new TarefasService();
  }

  async todasTarefas(_req: Request, res: Response) {
    const { code, data } = await this.tarefasService.todasTarefas();

    return res.status(code).json(data);
  }

  async adicionarTarefa(req: Request, res: Response) {
    const tarefa = req.body;

    const { code, data } = await this.tarefasService.adicionarTarefa(tarefa);

    return res.status(code).json(data);
  }

  async removeTarefa(req: Request, res: Response) {
    const { id } = req.params;

    const { code, data } = await this.tarefasService.removeTarefa(Number(id));
    console.log(data);

    return res.status(code).json(data);
  }

  async atualizaTarefa(req: Request, res: Response) {
    const { id } = req.params;
    const { descricao } = req.body;

    const { code } = await this.tarefasService.atualizaTarefa(Number(id), descricao);

    return res.status(code).end();
  }

  async atualizaStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;

    const { code } = await this.tarefasService.atualizaStatus(Number(id), status);

    return res.status(code).end();
  }
}
