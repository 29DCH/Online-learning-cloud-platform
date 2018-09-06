import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalHomeComponent } from './personal-home.component';

describe('PersonalHomeComponent', () => {
  let component: PersonalHomeComponent;
  let fixture: ComponentFixture<PersonalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
