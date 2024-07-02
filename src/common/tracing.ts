import { Tracing } from '@map-colonies/telemetry';
import { IGNORED_INCOMING_TRACE_ROUTES, IGNORED_OUTGOING_TRACE_ROUTES } from './constants';

const tracing = new Tracing(undefined, {
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
});

tracing.start();

export { tracing };
