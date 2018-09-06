import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoHomeworkComponent } from './do-homework.component';

describe('DoHomeworkComponent', () => {
  let component: DoHomeworkComponent;
  let fixture: ComponentFixture<DoHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
