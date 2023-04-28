import { CreateQestionInput } from './create-qestion.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQestionInput extends PartialType(CreateQestionInput) {
  @Field(() => Int)
  id: number;
}
