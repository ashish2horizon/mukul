import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveBookFormComponent } from './reactive-book-form.component';

describe('ReactiveBookFormComponent', () => {
  let component: ReactiveBookFormComponent;
  let fixture: ComponentFixture<ReactiveBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveBookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
