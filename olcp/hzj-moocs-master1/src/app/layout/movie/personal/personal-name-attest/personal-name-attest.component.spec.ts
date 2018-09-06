import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalNameAttestComponent } from './personal-name-attest.component';

describe('PersonalNameAttestComponent', () => {
  let component: PersonalNameAttestComponent;
  let fixture: ComponentFixture<PersonalNameAttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalNameAttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalNameAttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
