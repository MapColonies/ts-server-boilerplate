import jsLogger from '@map-colonies/js-logger';
import { trace } from '@opentelemetry/api';
import httpStatusCodes from 'http-status-codes';
import { getApp } from '../../../src/app';
import { Services } from '../../../src/common/constants';
import { IAnotherResourceModel } from '../../../src/anotherResource/models/anotherResourceManager';
import { AnotherResourceRequestSender } from './helpers/requestSender';

describe('resourceName', function () {
  let requestSender: AnotherResourceRequestSender;
  beforeEach(function () {
    const app = getApp({
      override: [
        { token: Services.LOGGER, provider: { useValue: jsLogger({ enabled: false }) } },
        { token: Services.TRACER, provider: { useValue: trace.getTracer('testTracer') } },
      ],
      useChild: true,
    });
    requestSender = new AnotherResourceRequestSender(app);
  });

  describe('Happy Path', function () {
    it('should return 200 status code and the resource', async function () {
      const response = await requestSender.getResource();

      expect(response.status).toBe(httpStatusCodes.OK);

      const resource = response.body as IAnotherResourceModel;
      expect(resource.kind).toEqual('avi');
      expect(resource.isAlive).toEqual(false);
    });
  });
  describe('Bad Path', function () {
    // All requests with status code of 400
  });
  describe('Sad Path', function () {
    // All requests with status code 4XX-5XX
  });
});
