import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

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
  }
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'Tarefas',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Tarefas, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Tarefas, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Tarefas.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Tarefas.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Tarefas;
