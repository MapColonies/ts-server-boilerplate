import { Logger } from '@map-colonies/js-logger';
import { BoundCounter, Meter } from '@opentelemetry/api-metrics';
import httpStatus from 'http-status-codes';
import { injectable, inject } from 'tsyringe';
import { SERVICES } from '@common/constants';
import type { TypedRequestHandlers } from '@openapi';

import { ResourceNameManager } from '../models/resourceNameManager';

@injectable()
export class ResourceNameController {
  private readonly createdResourceCounter: BoundCounter;

  public constructor(
    @inject(SERVICES.LOGGER) private readonly logger: Logger,
    @inject(ResourceNameManager) private readonly manager: ResourceNameManager,
    @inject(SERVICES.METER) private readonly meter: Meter
  ) {
    this.createdResourceCounter = meter.createCounter('created_resource');
  }

  public getResource: TypedRequestHandlers['getResourceName'] = (req, res) => {
    return res.status(httpStatus.OK).json(this.manager.getResource());
  };

  public createResource: TypedRequestHandlers['POST /resourceName'] = (req, res) => {
    const createdResource = this.manager.createResource(req.body);
    this.createdResourceCounter.add(1);
    return res.status(httpStatus.CREATED).json(createdResource);
  };
}
