import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateImgInput {
  @Field(() => String)
  img: string
  @Field(() => Int)
  width: number;
  @Field(() => Int)
  height: number;
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
    
  @Field(() => Int)
  newsId: number;
}
