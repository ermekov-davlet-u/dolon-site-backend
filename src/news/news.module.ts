import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsResolver } from './news.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './entities/news.entity';
import { Img } from 'src/img/entities/img.entity';

@Module({
  imports: [TypeOrmModule.forFeature([News,  Img])],
  providers: [NewsResolver, NewsService]
})
export class NewsModule {}
