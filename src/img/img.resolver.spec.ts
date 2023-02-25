import { Test, TestingModule } from '@nestjs/testing';
import { ImgResolver } from './img.resolver';
import { ImgService } from './img.service';

describe('ImgResolver', () => {
  let resolver: ImgResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImgResolver, ImgService],
    }).compile();

    resolver = module.get<ImgResolver>(ImgResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
