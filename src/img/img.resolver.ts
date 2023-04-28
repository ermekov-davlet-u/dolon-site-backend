import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImgService } from './img.service';
import { Img } from './entities/img.entity';
import { CreateImgInput } from './dto/create-img.input';
import { UpdateImgInput } from './dto/update-img.input';
import { HttpException, HttpStatus } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Resolver(() => Img)
export class ImgResolver {
  constructor(private readonly imgService: ImgService) {}

  @Mutation(() => Img)
  async createImg(@Args('createImgInput') createImgInput: CreateImgInput) {
    const { createReadStream, filename } = await createImgInput.image;
    return new Promise(async (resolve) => {
    createReadStream()
     .pipe(createWriteStream(join(process.cwd(), `./src/upload/${filename}`)))
     .on('finish', () =>
       resolve({
        image: filename,
       }),
     )
     .on('error',() => {
         new HttpException('Could not save image', HttpStatus.BAD_REQUEST);
      });
    });
    return this.imgService.create(createImgInput);
  }


  
  @Query(() => Img, { name: 'img' })
  findOne(@Args('imgId', { type: () => Int }) imgId: number) {
    return this.imgService.findOne(imgId);
  }

  @Query(() => [Img], { name: 'img' })
  findAll() {
    return this.imgService.findAll();
  }

  // @Mutation(() => Img)
  // async updateImg(@Args('updateImgInput') updateImgInput: UpdateImgInput) {
  //   return this.imgService.update(updateImgInput.imgId, updateImgInput);
  // }

  @Mutation(() => Img)
  removeImg(@Args('imgId', { type: () => Int }) imgId: number) {
    return this.imgService.remove(imgId);
  }
}
