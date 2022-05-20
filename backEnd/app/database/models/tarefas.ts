import { DATE, Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Tarefas extends Model {
  public id!: number;

  public titulo: string;

  public descricao: string;

  public status: string;
}

Tarefas.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: STRING,
    allowNull: false,
  },
  descricao: {
    type: STRING,
    allowNull: false,
  },
  status: {
    type: STRING,
    allowNull: false,
    defaultValue: 'Pendente',
  },
  createdAt: {
    type: DATE,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Tarefas',
  timestamps: true,
});

export default Tarefas;
