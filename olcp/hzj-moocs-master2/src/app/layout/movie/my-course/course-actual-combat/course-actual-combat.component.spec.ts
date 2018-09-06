import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseActualCombatComponent } from './course-actual-combat.component';

describe('CourseActualCombatComponent', () => {
  let component: CourseActualCombatComponent;
  let fixture: ComponentFixture<CourseActualCombatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseActualCombatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseActualCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
