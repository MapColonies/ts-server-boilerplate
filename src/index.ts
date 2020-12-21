// this import must be called before the first import of tsyring
import 'reflect-metadata';
import { Probe } from '@map-colonies/mc-probe';
import { container } from 'tsyringe';
import { get } from 'config'
import { getApp } from './app';
import { DEFAULT_SERVER_PORT, Services } from './common/constants';
import { ILogger } from './common/interfaces';

interface IServerConfig {
  port: string
}

const serverConfig = get<IServerConfig>('server');
const port: number = parseInt(serverConfig.port) ||  DEFAULT_SERVER_PORT;
void getApp().then(async (app) => {
  const logger = container.resolve<ILogger>(Services.LOGGER);
  const probe = new Probe(logger, {});
  await probe.start(app, port);
});
