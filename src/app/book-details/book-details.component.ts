import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book, Category } from '../model/book';
import { BookStoreService } from '../services/book-store.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public book: Book;
  private _category: string[];

  @ViewChild('bookDetailsForm') public bookDetailsForm: NgForm;

  constructor(private bookStoreService: BookStoreService) {
    const keys = Object.keys(Category);
    this._category = keys.slice(keys.length / 2);
  }

  public ngOnInit() {
    this.initializeModel();
  }

  private initializeModel () {
    this.book = <Book>{};
  }

  public onSubmit(bookForm: NgForm) {
    this.bookStoreService.addBook(this.book);
    this.initializeModel();
    bookForm.resetForm();
  }

  get Category() {
    return this._category;
  }
}
