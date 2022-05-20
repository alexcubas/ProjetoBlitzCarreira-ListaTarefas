import * as express from 'express';
import routerTarefas from './router/tarefasRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);

    this.app.use('/tarefas', routerTarefas);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.warn('Listen on', PORT));
  }
}

export { App };

export const { app } = new App();
