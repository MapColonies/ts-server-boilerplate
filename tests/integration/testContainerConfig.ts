import { container } from 'tsyringe';
import config from 'config';
import { trace } from '@opentelemetry/api';
import { Metrics } from '@map-colonies/telemetry';
import jsLogger from '@map-colonies/js-logger';
import { Services } from '../../src/common/constants';

function registerTestValues(): void {
  container.register(Services.CONFIG, { useValue: config });
  container.register(Services.LOGGER, { useValue: jsLogger({ enabled: false }) });

  // if sdk is not initialized then getTracer returns a NoopTracer
  const testTracer = trace.getTracer('testTracer');
  container.register(Services.TRACER, { useValue: testTracer });

  const metrics = new Metrics('app_meter');
  const meter = metrics.start();
  container.register(Services.METER, { useValue: meter });
}

export { registerTestValues };
