import { Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { injectable, container, inject } from 'tsyringe';
import { Services } from '../../common/constants';
import { ILogger } from '../../common/interfaces';

import { ResourceNameManager } from '../models/resourceNameManager';

@injectable()
export class ResourceNameController {
  public constructor(@inject(Services.LOGGER) private readonly logger: ILogger) {}
  public get(req: Request, res: Response): Response {
    const manager = container.resolve(ResourceNameManager);
    return res.status(httpStatus.OK).json(manager.getResource());
  }
}
