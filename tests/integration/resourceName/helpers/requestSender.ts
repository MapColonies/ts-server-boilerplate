import * as supertest from 'supertest';
import { Application } from 'express';

import { getApp } from '../../../../src/app';

let app : Application | null = null;

export async function init(): Promise<void> {
    app = await getApp();
}

export async function getResource(): Promise<supertest.Response> {
    return supertest.agent(app).get('/resourceName').set('Content-Type', 'application/json');
}
