import { InputType, Int, Field } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';


@InputType()
export class CreateImgInput {
  @Field(() => String)
  img: string
  @Field(() => Int)
  width: number;
  @Field(() => Int)
  height: number;

    
  @Field(() => Int)
  newsId: number;

  @Field(() => GraphQLUpload)
  image: any;
  
}
