import { Router } from 'express';
import { container } from 'tsyringe';
import { validate } from 'openapi-validator-middleware';
import { ResourceNameController } from '../controllers/resourceNameController';

const router = Router();
const controller = container.resolve(ResourceNameController);

router.get('/', validate, controller.get.bind(controller));

export { router };
