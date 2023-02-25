import { Module } from '@nestjs/common';
import { ImgService } from './img.service';
import { ImgResolver } from './img.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Img } from './entities/img.entity';
import { News } from 'src/news/entities/news.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Img, News])],
  providers: [ImgResolver, ImgService]
})
export class ImgModule {}
