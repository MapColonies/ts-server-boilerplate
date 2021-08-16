import { Logger } from '@map-colonies/js-logger';
import { inject, injectable } from 'tsyringe';
import { Services } from '../../common/constants';

const resourceInstance: IAnotherResourceModel = {
  kind: 'avi',
  isAlive: false,
};

export interface IAnotherResourceModel {
  kind: string;
  isAlive: boolean;
}

@injectable()
export class AnotherResourceManager {
  public constructor(@inject(Services.LOGGER) private readonly logger: Logger) {}
  public getResource(): IAnotherResourceModel {
    this.logger.info('loggging');
    return resourceInstance;
  }
}
