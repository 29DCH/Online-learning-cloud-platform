import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemListComponent } from './problem-list.component';

describe('ProblemListComponent', () => {
  let component: ProblemListComponent;
  let fixture: ComponentFixture<ProblemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
