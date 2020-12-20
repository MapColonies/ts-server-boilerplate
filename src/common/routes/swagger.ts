import { Router } from 'express';
import { get } from 'config';
import { container } from 'tsyringe';
import { SwaggerController } from '../controllers/swagger';

// FIX - THIS SHOULD BE A FUNC, NOT A FUCKING code that imported out of order
const swaggerRouter = Router();
const controller = container.resolve(SwaggerController);
const swaggerConfig: {
  jsonPath: string;
  uiPath: string;
} = get('swagger');
const swaggerJsonPath = swaggerConfig.jsonPath;
if (swaggerJsonPath && swaggerJsonPath !== '') {
  swaggerRouter.get(swaggerJsonPath, controller.serveJson.bind(controller));
}
const swaggerPath = swaggerConfig.uiPath;
swaggerRouter.use(swaggerPath, controller.uiMiddleware, controller.serveUi);

export { swaggerRouter };
