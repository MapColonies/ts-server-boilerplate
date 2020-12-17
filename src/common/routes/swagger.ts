import { Router } from 'express';
import { get } from 'config';
import { container } from 'tsyringe';
import { SwaggerController } from '../controllers/swagger';

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
