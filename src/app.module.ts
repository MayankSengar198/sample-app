import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/book.entity';

@Module({
  imports: [BooksModule , TypeOrmModule.forRoot(
    {
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "postgres",
      "password": "Sengar@6710",
      "database": "Books",
      "entities": [Book],
      "synchronize": true
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
