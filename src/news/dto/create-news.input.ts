import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNewsInput {

  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  content: string

  @Field(() => Int, { description: 'Example field (plaseholder)' })
  exampleField: number;

}
