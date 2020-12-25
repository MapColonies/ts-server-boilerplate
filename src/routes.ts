import { RequestHandler, Router } from 'express';
import { FactoryFunction } from 'tsyringe';
import { swaggerRouterFactory } from './common/routes/swagger';
import { resourceNameRouterFactory } from './resourceName/routes/resourceNameRouter';

interface Route {
  name: string;
  path: string;
  middlewares?: RequestHandler[];
  routerFactory: FactoryFunction<Router>;
}

export enum RouteNames {
  SWAGGER = 'swagger',
  RESOURCE_NAME = 'resourceName',
}

const routes: Route[] = [
  { name: RouteNames.RESOURCE_NAME, path: '/resourceName', routerFactory: resourceNameRouterFactory },
  { name: RouteNames.SWAGGER, path: '/', routerFactory: swaggerRouterFactory },
];
export { routes };
