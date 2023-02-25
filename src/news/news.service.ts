import { Injectable } from '@nestjs/common';
import { CreateNewsInput } from './dto/create-news.input';
import { UpdateNewsInput } from './dto/update-news.input';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor( @InjectRepository(News) private readonly newsRepo: Repository<News>  ){
  }

  create(createNewsInput: CreateNewsInput) {

    return this.newsRepo.save(createNewsInput);
  }

  findAll() {
    return this.newsRepo.find({
      relations: ["img"]
    });
  }

  findOne(id: number) {
    return this.newsRepo.findOne({
      where: {
        newsId: id
      },
      relations: ['img']
  });
  }

  update(id: number, updateNewsInput: UpdateNewsInput) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return this.newsRepo.delete({newsId: id});
  }
}
