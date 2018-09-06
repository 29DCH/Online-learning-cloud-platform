import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCommentComponent } from './answer-comment.component';

describe('AnswerCommentComponent', () => {
  let component: AnswerCommentComponent;
  let fixture: ComponentFixture<AnswerCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
