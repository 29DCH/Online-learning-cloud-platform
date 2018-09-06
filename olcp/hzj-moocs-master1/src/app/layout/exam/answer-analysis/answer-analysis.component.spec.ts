import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerAnalysisComponent } from './answer-analysis.component';

describe('AnswerAnalysisComponent', () => {
  let component: AnswerAnalysisComponent;
  let fixture: ComponentFixture<AnswerAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
