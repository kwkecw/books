import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  // Normally this would be a backend API call to store against DB
  private _bookStore: Book[];

  constructor() {
    this._bookStore = [];
  }

  public addBook(book: Book) {
    this._bookStore.push(book);
  }

  get count() {
    return this._bookStore.length;
  }

  get books() {
    return JSON.parse(JSON.stringify(this._bookStore));
  }
}
