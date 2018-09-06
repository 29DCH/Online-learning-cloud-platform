import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExamHomeComponent } from './login-exam-home.component';

describe('LoginExamHomeComponent', () => {
  let component: LoginExamHomeComponent;
  let fixture: ComponentFixture<LoginExamHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginExamHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginExamHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
