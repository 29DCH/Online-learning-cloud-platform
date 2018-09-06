import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHomeComponent } from './task-home.component';

describe('TaskHomeComponent', () => {
  let component: TaskHomeComponent;
  let fixture: ComponentFixture<TaskHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
