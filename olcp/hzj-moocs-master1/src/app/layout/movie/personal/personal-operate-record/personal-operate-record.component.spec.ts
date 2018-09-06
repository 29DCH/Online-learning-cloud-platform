import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalOperateRecordComponent } from './personal-operate-record.component';

describe('PersonalOperateRecordComponent', () => {
  let component: PersonalOperateRecordComponent;
  let fixture: ComponentFixture<PersonalOperateRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalOperateRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalOperateRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
