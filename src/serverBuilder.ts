import express from 'express';
import bodyParser from 'body-parser';
import { initAsync as validatorInit } from 'openapi-validator-middleware';
import { container, inject, injectable } from 'tsyringe';
import { RequestLogger } from './common/middlewares/RequestLogger';
import { ErrorHandler } from './common/middlewares/ErrorHandler';
import { Services } from './common/constants';
import { IConfig, ILogger } from './common/interfaces';
import { resourceNameRouterFactory } from './resourceName/routes/resourceNameRouter';
import { swaggerRouterFactory } from './common/routes/swagger';

@injectable()
export class ServerBuilder {
  private readonly serverInstance = express();

  public constructor(
    @inject(Services.LOGGER) private readonly logger: ILogger,
    @inject(Services.CONFIG) private readonly config: IConfig,
    private readonly requestLogger: RequestLogger,
    private readonly errorHandler: ErrorHandler
  ) {
    this.serverInstance = express();
  }

  public async build(): Promise<express.Application> {
    //initiate swagger validator
    await validatorInit(this.config.get('swaggerConfig.filePath'));

    this.registerMiddleware();
    this.buildRoutes();

    return this.serverInstance;
  }

  private buildRoutes(): void {
    this.logger.log('debug', 'registering service routes');

    this.serverInstance.use('/resourceName', resourceNameRouterFactory(container));
    this.serverInstance.use('/', swaggerRouterFactory(container));
  }

  private registerMiddleware(): void {
    this.logger.log('debug', 'Registering middlewares');
    this.serverInstance.use(bodyParser.json());
    this.serverInstance.use(this.requestLogger.getLoggerMiddleware());
    this.serverInstance.use(this.errorHandler.getErrorHandlerMiddleware());
  }
}
