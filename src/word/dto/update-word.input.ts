import { CreateWordInput } from './create-word.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWordInput extends PartialType(CreateWordInput) {
  @Field(() => Int)
  id: number;
}
