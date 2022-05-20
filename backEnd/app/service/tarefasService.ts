import ItarefasCreate from '../interfaces/tarefas';
import Tarefas from '../database/models/tarefas';

export default class TarefasService {
  constructor(private tarefas = Tarefas) {}

  async todasTarefas() {
    const result = await this.tarefas.findAll();

    return { code: 200,
      data: result };
  }

  async adicionarTarefa({ titulo, descricao }: ItarefasCreate) {
    const result = await this.tarefas.create({ titulo, descricao });

    return { code: 201, data: result };
  }

  async removeTarefa(id: number) {
    await this.tarefas.destroy({ where: { id } });

    const result = await this.tarefas.findAll();

    return { code: 204, data: result };
  }

  async atualizaTarefa(id: number, descricao: string) {
    await this.tarefas.update({ descricao }, { where: { id } });

    return { code: 200 };
  }

  async atualizaStatus(id: number, status: string) {
    console.log(status);

    await this.tarefas.update({ status }, { where: { id } });

    return { code: 200 };
  }
}
