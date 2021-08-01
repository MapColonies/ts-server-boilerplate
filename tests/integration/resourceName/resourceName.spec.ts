import jsLogger from '@map-colonies/js-logger';
import { trace } from '@opentelemetry/api';
import httpStatusCodes from 'http-status-codes';
import { getApp } from '../../../src/app';
import { Services } from '../../../src/common/constants';
import { IResourceNameModel } from '../../../src/resourceName/models/resourceNameManager';
import { ResourceNameRequestSender } from './helpers/requestSender';

describe('resourceName', function () {
  let requestSender: ResourceNameRequestSender;
  beforeEach(function () {
    const app = getApp({
      override: [
        { token: Services.LOGGER, provider: { useValue: jsLogger({ enabled: false }) } },
        { token: Services.TRACER, provider: { useValue: trace.getTracer('testTracer') } },
      ],
      useChild: true,
    });
    requestSender = new ResourceNameRequestSender(app);
  });
  afterEach(function () {
    // container.clearInstances();
  });

  describe('Happy Path', function () {
    it('should return 200 status code and the resource', async function () {
      const response = await requestSender.getResource();

      expect(response.status).toBe(httpStatusCodes.OK);

      const resource = response.body as IResourceNameModel;
      expect(resource.id).toEqual(1);
      expect(resource.name).toEqual('ronin');
      expect(resource.description).toEqual('can you do a logistics run?');
    });
    it('should return 200 status code and create the resource', async function () {
      const response = await requestSender.createResource();

      expect(response.status).toBe(httpStatusCodes.CREATED);
    });
  });
  describe('Bad Path', function () {
    // All requests with status code of 400
  });
  describe('Sad Path', function () {
    // All requests with status code 4XX-5XX
  });
});
