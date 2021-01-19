import { inject, injectable } from 'tsyringe';
import { Services } from '../../common/constants';
import { ILogger } from '../../common/interfaces';

const resourceInstance: IResourceNameModel = {
  id: 1,
  name: 'ronin',
  description: 'can you do a logistics run?',
};

function generateRandomId(): number {
  const rangeOfIds = 100;
  return Math.floor(Math.random() * rangeOfIds);
}
export interface IResourceNameModel {
  id?: number;
  name: string;
  description: string;
}

@injectable()
export class ResourceNameManager {
  public constructor(@inject(Services.LOGGER) private readonly logger: ILogger) {}
  public getResource(): IResourceNameModel {
    this.logger.log('info', 'loggging');
    return resourceInstance;
  }
  public createResource(resource: IResourceNameModel): IResourceNameModel {
    return { id: generateRandomId(), ...resource };
  }
}
