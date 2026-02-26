import type { Application } from 'express';
import type { DependencyContainer } from 'tsyringe';
import { registerExternalValues, type RegisterOptions } from './containerConfig';
import { ServerBuilder } from './serverBuilder';

async function getApp(registerOptions?: RegisterOptions): Promise<[Application, DependencyContainer]> {
  const container = await registerExternalValues(registerOptions);
  const app = container.resolve(ServerBuilder).build();
  return [app, container];
}

export { getApp };
