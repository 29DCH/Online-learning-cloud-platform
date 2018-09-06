import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRootComponent } from './study-root.component';

describe('StudyRootComponent', () => {
  let component: StudyRootComponent;
  let fixture: ComponentFixture<StudyRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
