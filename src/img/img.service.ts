import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImgInput } from './dto/create-img.input';
import { UpdateImgInput } from './dto/update-img.input';
import { Img } from './entities/img.entity';

@Injectable()
export class ImgService {

  constructor(
    @InjectRepository(Img) private readonly imgRepo: Repository<Img>
  ){

  }

  create(createImgInput: CreateImgInput) {
    return this.imgRepo.save(createImgInput);
  }

  findAll() {
    return this.imgRepo.find({
      relations: ["news"]
    });
  }

  findOne(id: number) {
    return this.imgRepo.findOne({
      where:{
        imgId: id
      },
      relations: ["news"]
    });
  }

  update(id: number, updateImgInput: UpdateImgInput) {
    return this.imgRepo.update(id, updateImgInput);
  }

  remove(id: number) {
    return this.imgRepo.delete(id);
  }
}
