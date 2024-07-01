import { Tracing } from '@map-colonies/telemetry';
import { IGNORED_INCOMING_TRACE_ROUTES, IGNORED_OUTGOING_TRACE_ROUTES } from './constants';
import { getConfig, initConfig } from './config';

let tracing: Tracing;

(async (): Promise<void> => {
  await initConfig();

  const config = getConfig();

  const tracingConfig = config.get('telemetry.tracing');
  const sharedConfig = config.get('telemetry.shared');

  tracing = new Tracing({
    ...tracingConfig,
    ...sharedConfig,
    autoInstrumentationsConfigMap: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '@opentelemetry/instrumentation-http': {
        ignoreIncomingRequestHook: (request): boolean =>
          IGNORED_INCOMING_TRACE_ROUTES.some((route) => request.url !== undefined && route.test(request.url)),
        ignoreOutgoingRequestHook: (request): boolean =>
          IGNORED_OUTGOING_TRACE_ROUTES.some((route) => typeof request.path === 'string' && route.test(request.path)),
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '@opentelemetry/instrumentation-fs': {
        requireParentSpan: true,
      },
    },
  });

  tracing.start();
})().catch(console.error);

export { tracing };
