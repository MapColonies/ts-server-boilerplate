import { Logger } from '@map-colonies/js-logger';
import { Registry,Counter } from 'prom-client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status-codes';
import { injectable, inject } from 'tsyringe';
import { SERVICES } from '../../common/constants';

import { IAnotherResourceModel, AnotherResourceManager } from '../models/anotherResourceManager';

type GetResourceHandler = RequestHandler<undefined, IAnotherResourceModel>;

@injectable()
export class AnotherResourceController {
  private readonly createdResourceCounter: Counter<'status'>;

  public constructor(
    @inject(SERVICES.LOGGER) private readonly logger: Logger,
    @inject(AnotherResourceManager) private readonly manager: AnotherResourceManager,
    @inject(SERVICES.METRICS_REGISTRY) private readonly metricsRegistry: Registry
  ) {
    this.createdResourceCounter = new Counter({
      name: 'another_resource_fetch_total',
      help: 'Total number of fetches of another resource',
      labelNames: ['status'] as const,
      registers: [this.metricsRegistry] ,
    })
  }

  public getResource: GetResourceHandler = (req, res, next) => {
    this.createdResourceCounter.inc({ status: 'success' });
    try {
      return res.status(httpStatus.OK).json(this.manager.getResource());
    } catch (error) {
      this.createdResourceCounter.inc({ status: 'failure' });
      next(error);
    }
  };
}
