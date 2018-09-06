import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalReceiveAddressComponent } from './personal-receive-address.component';

describe('PersonalReceiveAddressComponent', () => {
  let component: PersonalReceiveAddressComponent;
  let fixture: ComponentFixture<PersonalReceiveAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalReceiveAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalReceiveAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
