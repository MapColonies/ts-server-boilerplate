import { Logger } from '@map-colonies/js-logger';
import client, { Registry } from 'prom-client';
import httpStatus from 'http-status-codes';
import { injectable, inject } from 'tsyringe';
import { SERVICES } from '@common/constants';
import type { TypedRequestHandlers } from '@openapi';
import { AnotherResourceManager } from '../models/anotherResourceManager';

@injectable()
export class AnotherResourceController {
  private readonly getResourceCounter: client.Counter;

  public constructor(
    @inject(SERVICES.LOGGER) private readonly logger: Logger,
    @inject(AnotherResourceManager) private readonly manager: AnotherResourceManager,
    @inject(SERVICES.METRICS) private readonly metricsRegistry: Registry
  ) {
    this.getResourceCounter = new client.Counter({
      name: 'get_resource',
      help: 'number of get resource requests',
      registers: [this.metricsRegistry],
    });
  }

  public getResource: TypedRequestHandlers['getAnotherResource'] = (req, res) => {
    this.getResourceCounter.inc(1);
    return res.status(httpStatus.OK).json(this.manager.getResource());
  };
}
