import { readFileSync } from 'fs';
import { container } from 'tsyringe';
import config from 'config';
import { Tracing, Metrics } from '@map-colonies/telemetry';
import { MCLogger, IServiceConfig } from '@map-colonies/mc-logger';
import { Services } from '../../src/common/constants';

function registerTestValues(): void {
  const packageContent = readFileSync('./package.json', 'utf8');
  const service = JSON.parse(packageContent) as IServiceConfig;
  const logger = new MCLogger({ log2console: true, level: 'error' }, service);

  container.register(Services.CONFIG, { useValue: config });
  container.register(Services.LOGGER, { useValue: logger });

  const tracing = new Tracing('app_tracer');
  const tracer = tracing.start();
  container.register(Services.TRACER, { useValue: tracer });

  const metrics = new Metrics('app_meter');
  const meter = metrics.start();
  container.register(Services.METER, { useValue: meter });
}

export { registerTestValues };
