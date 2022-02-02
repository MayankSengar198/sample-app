  import { Injectable, HttpException } from '@nestjs/common';
  import { Book } from './book.entity';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { BooksRepository } from './books.repository';
import { CreateBookDTO } from './dto/create-book.dto';
  
  @Injectable()
  export class BooksService {
      
    constructor(
        @InjectRepository(BooksRepository)
        private booksRepository: BooksRepository,
        ) {}
    
      async getBooks(): Promise<Book[]> {
        return this.booksRepository.find();
      }

      async getBook(bookID): Promise<Book> {
          let id = Number(bookID);
          return this.booksRepository.findOne(id);
      }

      async addBook(book : CreateBookDTO): Promise<Book> {
           return await this.booksRepository.save(book);
      }
      
      async deleteBook(bookID): Promise<void> {
        let id = Number(bookID);
        await this.booksRepository.delete(id);
        };
     }
  