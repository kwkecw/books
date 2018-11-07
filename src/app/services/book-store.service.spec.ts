import { TestBed, inject } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';
import { Book, Category } from '../model/book';

describe('BookStoreService', () => {
  let book1: Book;
  let book2: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookStoreService]
    });
    book1 = {
      title: 'ABC',
      category: Category.comedy,
      description: 'A book about C programming'
    };
    book2 = {
      title: '123',
      category: Category.comedy,
      description: 'A book about C programming'
    };
});

  it('should be created', inject([BookStoreService], (service: BookStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('should initialized with an empty bookStore', inject([BookStoreService], (service: BookStoreService) => {
    expect(service.count).toEqual(0);
  }));

  describe('addBook()', () => {
    it('should add books to the internal store', inject([BookStoreService], (service: BookStoreService) => {
      service.addBook(book1);
      expect(service.count).toEqual(1);
    }));
    it('should not be able to break the internal store', inject([BookStoreService], (service: BookStoreService) => {
      service.addBook(book1);
      expect(service.count).toEqual(1);
      expect(service.books[0].title).toEqual('ABC');
      book1.title = 'XYZ';
      expect(service.books[0].title).toEqual('ABC');
    }));
  });
  describe('books getter', () => {
    it('should return all details of the list of books in store', inject([BookStoreService], (service: BookStoreService) => {
      service.addBook(book1);
      service.addBook(book2);
      expect(service.count).toEqual(2);
      expect(service.books[0].title).toEqual('ABC');
      expect(service.books[1].title).toEqual('123');
    }));  
    it('should not be expose the internal store', inject([BookStoreService], (service: BookStoreService) => {
      service.addBook(book1);
      service.addBook(book2);
      expect(service.count).toEqual(2);
      expect(service.books[0].title).toEqual('ABC');
      expect(service.books[1].title).toEqual('123');
      let book2_fromStore = service.books[1];
      book2_fromStore.title = 'XYZ';
      expect(service.books[1].title).toEqual('123');
    }));  
  })
});
