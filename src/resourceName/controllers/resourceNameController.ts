import { Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { injectable, container } from 'tsyringe';

import { ResourceNameManager } from '../models/resourceNameManager';

@injectable()
export class ResourceNameController {
  public get(req: Request, res: Response): Response {
    const manager = container.resolve(ResourceNameManager);
    return res.status(httpStatus.OK).json(manager.getResource());
  }
}
