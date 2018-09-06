import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBindInfoComponent } from './personal-bind-info.component';

describe('PersonalBindInfoComponent', () => {
  let component: PersonalBindInfoComponent;
  let fixture: ComponentFixture<PersonalBindInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBindInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBindInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
