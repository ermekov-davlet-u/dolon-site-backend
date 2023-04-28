import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './news/entities/news.entity';
import { join } from 'path';
import { ImgModule } from './img/img.module';
import { Img } from './img/entities/img.entity';
import { QestionModule } from './qestion/qestion.module';
import { SubjectModule } from './subject/subject.module';
import { WordModule } from './word/word.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: any) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'dolon-site',
        entities: [News, Img],
        synchronize: true,
      })
    }),
    NewsModule,
    ImgModule,
    QestionModule,
    SubjectModule,
    WordModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
