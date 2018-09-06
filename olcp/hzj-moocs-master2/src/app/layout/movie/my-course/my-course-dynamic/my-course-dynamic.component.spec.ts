import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseDynamicComponent } from './my-course-dynamic.component';

describe('MyCourseDynamicComponent', () => {
  let component: MyCourseDynamicComponent;
  let fixture: ComponentFixture<MyCourseDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCourseDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCourseDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
