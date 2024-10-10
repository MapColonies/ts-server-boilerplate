import { Logger } from '@map-colonies/js-logger';
import { Meter } from '@opentelemetry/api';
import { BoundCounter } from '@opentelemetry/api-metrics';
import httpStatus from 'http-status-codes';
import { injectable, inject } from 'tsyringe';
import { SERVICES } from '@common/constants';
import type { TypedRequestHandlers } from '@openapi';
import { AnotherResourceManager } from '../models/anotherResourceManager';

@injectable()
export class AnotherResourceController {
  private readonly createdResourceCounter: BoundCounter;

  public constructor(
    @inject(SERVICES.LOGGER) private readonly logger: Logger,
    @inject(AnotherResourceManager) private readonly manager: AnotherResourceManager,
    @inject(SERVICES.METER) private readonly meter: Meter
  ) {
    this.createdResourceCounter = meter.createCounter('created_resource');
  }

  public getResource: TypedRequestHandlers['getAnotherResource'] = (req, res) => {
    return res.status(httpStatus.OK).json(this.manager.getResource());
  };
}
