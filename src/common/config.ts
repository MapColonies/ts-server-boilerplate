import { ConfigInstance, config } from '@map-colonies/config';
import { commonBoilerplateV4, commonBoilerplateV4Type } from '@map-colonies/schemas';

type ConfigType = ConfigInstance<commonBoilerplateV4Type>;

let configInstance: ConfigType | undefined;

async function initConfig(): Promise<void> {
  configInstance = await config({
    configName: 'test-boilerplate',
    configServerUrl: 'http://localhost:8080',
    schema: commonBoilerplateV4,
    version: 'latest',
  });
}

function getConfig(): ConfigType {
  if (!configInstance) {
    throw new Error('config not initialized');
  }
  return configInstance;
}

export { getConfig, initConfig, ConfigType };
