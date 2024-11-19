import { Test, TestingModule } from '@nestjs/testing';
import { PreferencesController } from './preferences.controller';
import { PreferencesService } from './preferences.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('PreferencesController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreferencesController],
      providers: [PreferencesService],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should create user preferences', async () => {
    return request(app.getHttpServer())
      .post('/api/preferences')
      .send({
        userId: 'user123',
        email: 'user@example.com',
        preferences: {
          marketing: true,
          newsletter: false,
          updates: true,
          frequency: 'weekly',
          channels: { email: true, sms: false, push: true },
        },
        timezone: 'America/New_York',
      })
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
