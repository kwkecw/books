import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { BookDetailsComponent } from './book-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

fdescribe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a title of Add Book in h2 tag', () => {
    expect(compiled.querySelector('h2').textContent).toContain('Add Book');
  });
  it('should have book title, category and description user input controls', () => {
    expect(compiled.querySelector('input[name="title"]')).toBeTruthy();
    expect(compiled.querySelector('mat-select[name="category"]')).toBeTruthy();
    expect(compiled.querySelector('textarea[name="description"]')).toBeTruthy();
  });
  it('should ensure title is mandatory', () => {
    fixture.whenStable().then(() => {
      expect(component.bookDetailsForm.form.controls['title'].valid).toBeFalsy();
      expect(component.bookDetailsForm.form.controls['category'].valid).toBeFalsy();
      expect(component.bookDetailsForm.form.controls['description'].valid).toBeFalsy();

      const titleEle = compiled.querySelector('input[name="title"]');
      titleEle.value = 'The magnificent seven';
      titleEle.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.bookDetailsForm.form.controls['title'].valid).toBeTruthy();
    });
  });
});
