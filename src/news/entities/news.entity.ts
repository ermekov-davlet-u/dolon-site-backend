import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Img } from 'src/img/entities/img.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
@ObjectType()
export class News {

  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'news table id' })
  newsId: number

  @Column("varchar")
  @Field(() => String, {description: "news title"})
  title: string

  @Column("varchar")
  @Field(() => String, { description: "news content" })
  content: string

  @Column("int")
  @Field(() => Int, { description: 'Example field (placeholder)'})
  exampleField: number;

  @OneToMany(() => Img, img => img.news)
  @Field(() => [Img])
  img: Img[]



}
