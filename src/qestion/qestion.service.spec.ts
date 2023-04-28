import { Test, TestingModule } from '@nestjs/testing';
import { QestionService } from './qestion.service';

describe('QestionService', () => {
  let service: QestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QestionService],
    }).compile();

    service = module.get<QestionService>(QestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
