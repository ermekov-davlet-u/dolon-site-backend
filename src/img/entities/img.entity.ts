import { ObjectType, Field, Int } from '@nestjs/graphql';
import { News } from 'src/news/entities/news.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Img {
  @PrimaryGeneratedColumn()
  @Field()
  imgId: number

  @Column()
  @Field(() => String)
  img: string

  @Column()
  @Field(() => Int)
  width: number;

  @Column()
  @Field(() => Int)
  height: number;

  @Column()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @ManyToOne(() => News, news => news.img )
  @Field(() => News)
  news: News

  @Column()
  @Field(() => Int)
  newsId: number;

  @Column({
    default: "empty",
    nullable: true
  })
  @Field(() => String)
  image: string;

}
