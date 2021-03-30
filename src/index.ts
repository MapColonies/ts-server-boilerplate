/* eslint-disable import/first */
// this import must be called before the first import of tsyring
import 'reflect-metadata';
import { Tracing } from '@map-colonies/telemetry';
import { Probe } from '@map-colonies/mc-probe';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { container } from 'tsyringe';
import { get } from 'config';
import { DEFAULT_SERVER_PORT } from './common/constants';

const tracing = new Tracing('app_tracer', [new HttpInstrumentation({ ignoreOutgoingUrls: [/^.*\/v1\/metrics.*$/] }), new ExpressInstrumentation()]);

import { getApp } from './app';

interface IServerConfig {
  port: string;
}

const serverConfig = get<IServerConfig>('server');
const port: number = parseInt(serverConfig.port) || DEFAULT_SERVER_PORT;
const app = getApp(tracing);
const probe = container.resolve<Probe>(Probe);
void probe.start(app, port).then(() => {
  probe.readyFlag = true;
});
