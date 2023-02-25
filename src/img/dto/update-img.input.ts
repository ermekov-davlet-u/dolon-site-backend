import { CreateImgInput } from './create-img.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImgInput extends PartialType(CreateImgInput) {
  @Field()
  imgId: number
}
