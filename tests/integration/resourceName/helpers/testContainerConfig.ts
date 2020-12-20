import { readFileSync } from 'fs';
import { container } from 'tsyringe';
import { get } from 'config';
import { Probe } from '@map-colonies/mc-probe';
import { MCLogger, ILoggerConfig, IServiceConfig } from '@map-colonies/mc-logger';
import { ResourceNameManager } from '../../../../src/resourceName/models/resourceNameManager';

function registerTestValues(): void {
  const packageContent = readFileSync('./package.json', 'utf8');
  const service = JSON.parse(packageContent) as IServiceConfig;
  const logger = new MCLogger({ log2console: true, level: 'error' }, service);

  container.register<MCLogger>(MCLogger, { useValue: logger });
  // container.register<Probe>(Probe, { useValue: new Probe(logger, {}) });
  container.register<ResourceNameManager>(ResourceNameManager, { useClass: ResourceNameManager });
}

export { registerTestValues };
