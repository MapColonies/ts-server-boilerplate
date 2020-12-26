import { Router } from 'express';
import { FactoryFunction } from 'tsyringe';
import { validate } from 'openapi-validator-middleware';
import { ResourceNameController } from '../controllers/resourceNameController';

const resourceNameRouterFactory: FactoryFunction<Router> = (dependencyContainer) => {
  const router = Router();
  const controller = dependencyContainer.resolve(ResourceNameController);

  router.get('/', validate, controller.getResource);
  router.post('/', validate, controller.createResource);

  return router;
};

export { resourceNameRouterFactory };
