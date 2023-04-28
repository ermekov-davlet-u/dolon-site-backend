import { Module } from '@nestjs/common';
import { QestionService } from './qestion.service';
import { QestionResolver } from './qestion.resolver';

@Module({
  providers: [QestionResolver, QestionService]
})
export class QestionModule {}
