import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceCommentComponent } from './choice-comment.component';

describe('ChoiceCommentComponent', () => {
  let component: ChoiceCommentComponent;
  let fixture: ComponentFixture<ChoiceCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
