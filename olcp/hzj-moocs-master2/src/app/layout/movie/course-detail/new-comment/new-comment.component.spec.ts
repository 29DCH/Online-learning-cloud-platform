import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommentComponent } from './new-comment.component';

describe('NewCommentComponent', () => {
  let component: NewCommentComponent;
  let fixture: ComponentFixture<NewCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
