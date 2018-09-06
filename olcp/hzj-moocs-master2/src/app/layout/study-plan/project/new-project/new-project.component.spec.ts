import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectComponent } from './new-project.component';

describe('NewProjectComponent', () => {
  let component: NewProjectComponent;
  let fixture: ComponentFixture<NewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
