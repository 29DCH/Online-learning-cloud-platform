import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalStudentAttestComponent } from './personal-student-attest.component';

describe('PersonalStudentAttestComponent', () => {
  let component: PersonalStudentAttestComponent;
  let fixture: ComponentFixture<PersonalStudentAttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalStudentAttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalStudentAttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
