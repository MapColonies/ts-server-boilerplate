import { inject, injectable } from 'tsyringe';
import { Services } from '../../common/constants';
import { ILogger } from '../../common/interfaces';

export interface IResourceNameModel {
  id: number;
  name: string;
  description: string;
}

@injectable()
export class ResourceNameManager {
  public constructor(@inject(Services.LOGGER) private readonly logger: ILogger) {}
  public getResource(): IResourceNameModel {
    this.logger.log('info', 'loggging');
    return {
      id: 1,
      name: 'ronin',
      description: 'can you do a logistics run?',
    };
  }
}
