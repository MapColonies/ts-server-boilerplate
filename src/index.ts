/* eslint-disable import/first */
// this import must be called before the first import of tsyring
// eslint-disable-next-line import/newline-after-import
import { Tracing } from '@map-colonies/telemetry';
const tracing = new Tracing(SERVICE_NAME, undefined, {
  serviceName: SERVICE_NAME,
  url: 'http://localhost:55681/v1/trace',
});

tracing.start();
import 'reflect-metadata';
import { Probe } from '@map-colonies/mc-probe';
import { container } from 'tsyringe';
import { get } from 'config';
import { getApp } from './app';
import { DEFAULT_SERVER_PORT, SERVICE_NAME } from './common/constants';

interface IServerConfig {
  port: string;
}

const serverConfig = get<IServerConfig>('server');
const port: number = parseInt(serverConfig.port) || DEFAULT_SERVER_PORT;
const app = getApp();
const probe = container.resolve<Probe>(Probe);
void probe.start(app, port).then(() => {
  probe.readyFlag = true;
});
