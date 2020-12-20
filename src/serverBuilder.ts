import express from 'express';
import { initAsync as validatorInit } from 'openapi-validator-middleware';
import { MCLogger } from '@map-colonies/mc-logger';
import { inject, injectable } from 'tsyringe';
import { RequestLogger } from './common/middlewares/RequestLogger';
import { ErrorHandler } from './common/middlewares/ErrorHandler';
import { router as resourceNameRouter } from './resourceName/routers/resourceNameRouter';
import { swaggerRouter } from './common/routes/swagger';
import { Services } from './common/constants';
import { ILogger } from './common/interfaces';

@injectable()
export class ServerBuilder {
  private readonly serverInstance = express();

  public constructor(
    @inject(Services.LOGGER)private readonly logger: ILogger,
    private readonly requestLogger: RequestLogger,
    private readonly errorHandler: ErrorHandler
  ) {
    this.serverInstance = express();
  }

  public async build(): Promise<express.Application> {
    //initiate swagger validator
    await validatorInit('./openapi3.yaml');

    this.registerMiddleware();
    this.buildRoutes();

    return this.serverInstance;
  }

  private buildRoutes(): void {
    this.serverInstance.use('/resourceName', resourceNameRouter);
    this.serverInstance.use(swaggerRouter);
  }

  private registerMiddleware(): void {
    this.serverInstance.use(this.requestLogger.getLoggerMiddleware());
    this.serverInstance.use(this.errorHandler.getErrorHandlerMiddleware());
  }

}
