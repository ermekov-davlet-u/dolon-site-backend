import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Qestion {

  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'id question' })
  idQuestion: number;

                   

}
