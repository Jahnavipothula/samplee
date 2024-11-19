import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationService],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
  });

  it('should send a notification', async () => {
    const result = await service.sendNotification({
      userId: 'user123',
      type: 'marketing',
      channel: 'email',
      content: {
        subject: 'Special Offer',
        body: 'Check out our latest deals!',
      },
    });
    expect(result.status).toBe('sent');
  });
});
