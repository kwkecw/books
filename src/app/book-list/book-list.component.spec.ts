import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { BookStoreService } from '../services/book-store.service';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a title of Book List (0) in h2 tag', () => {
    expect(compiled.querySelector('h2').textContent).toContain('Book List (0)');
  });

  it('should render a title of Book List (1) in h2 tag', () => {
    const bookStore = getTestBed().get(BookStoreService);
    bookStore.addBook({
      title: 'ABC',
      category: 'sport',
      description: 'asdasdasdasasd'
    });
    expect(compiled.querySelector('h2').textContent).toContain('Book List (1)');
  });
});
