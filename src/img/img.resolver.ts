import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImgService } from './img.service';
import { Img } from './entities/img.entity';
import { CreateImgInput } from './dto/create-img.input';
import { UpdateImgInput } from './dto/update-img.input';

@Resolver(() => Img)
export class ImgResolver {
  constructor(private readonly imgService: ImgService) {}

  @Mutation(() => Img)
  createImg(@Args('createImgInput') createImgInput: CreateImgInput) {
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

  @Mutation(() => Img)
  updateImg(@Args('updateImgInput') updateImgInput: UpdateImgInput) {
    return this.imgService.update(updateImgInput.imgId, updateImgInput);
  }

  @Mutation(() => Img)
  removeImg(@Args('imgId', { type: () => Int }) imgId: number) {
    return this.imgService.remove(imgId);
  }
}
