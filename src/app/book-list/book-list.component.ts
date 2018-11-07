import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../services/book-store.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(public bookStoreService: BookStoreService) { }

  ngOnInit() {
  }

}
