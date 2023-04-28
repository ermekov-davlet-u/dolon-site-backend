import { Test, TestingModule } from '@nestjs/testing';
import { QestionResolver } from './qestion.resolver';
import { QestionService } from './qestion.service';

describe('QestionResolver', () => {
  let resolver: QestionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QestionResolver, QestionService],
    }).compile();

    resolver = module.get<QestionResolver>(QestionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
