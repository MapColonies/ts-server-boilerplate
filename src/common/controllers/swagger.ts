import { readFileSync } from 'fs';
import swaggerUi from 'swagger-ui-express';
import { get } from 'config';
import { MCLogger } from '@map-colonies/mc-logger';
import { Request, Response, RequestHandler, NextFunction } from 'express';
import { safeLoad } from 'js-yaml';
import { injectable, delay, inject } from 'tsyringe';
@injectable()
export class SwaggerController {
  public uiMiddleware: RequestHandler[];
  public serveUi: RequestHandler;

  private readonly swaggerDoc: swaggerUi.JsonObject;

  private readonly swaggerConfig: {
    jsonPath: string;
    uiPath: string;
  };

  public constructor(
    @inject(delay(() => MCLogger)) private readonly logger: MCLogger
  ) {
    this.swaggerConfig = get('swagger');

    console.log(process.cwd())
    this.swaggerDoc = safeLoad(readFileSync('common/openapi3.yaml', 'utf8')) as swaggerUi.JsonObject;
    this.serveUi = swaggerUi.setup(this.swaggerDoc);
    this.uiMiddleware = swaggerUi.serve;
  }

  public serveJson(req: Request, res: Response): void {
    res.json(this.swaggerDoc);
  }

}
