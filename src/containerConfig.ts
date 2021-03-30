import { readFileSync } from 'fs';
import { container } from 'tsyringe';
import config from 'config';
import { Probe } from '@map-colonies/mc-probe';
import { MCLogger, ILoggerConfig, IServiceConfig } from '@map-colonies/mc-logger';
import { Tracing, Metrics } from '@map-colonies/telemetry';
import { Services } from './common/constants';

function registerExternalValues(tracing: Tracing): void {
  const loggerConfig = config.get<ILoggerConfig>('logger');
  const packageContent = readFileSync('./package.json', 'utf8');
  const service = JSON.parse(packageContent) as IServiceConfig;
  const logger = new MCLogger(loggerConfig, service);
  container.register(Services.CONFIG, { useValue: config });
  container.register(Services.LOGGER, { useValue: logger });

  const tracer = tracing.start();
  container.register(Services.TRACER, { useValue: tracer });

  const metrics = new Metrics('app_meter');
  const meter = metrics.start();
  container.register(Services.METER, { useValue: meter });

  container.register<Probe>(Probe, {
    useFactory: (container) =>
      new Probe(container.resolve(Services.LOGGER), {
        onShutdown: async (): Promise<void> => {
          await Promise.all([tracing.stop(), metrics.stop()]);
        },
      }),
  });
}

export { registerExternalValues };
