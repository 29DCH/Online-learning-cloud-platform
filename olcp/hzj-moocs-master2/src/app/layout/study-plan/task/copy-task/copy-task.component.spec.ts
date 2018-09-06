import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyTaskComponent } from './copy-task.component';

describe('CopyTaskComponent', () => {
  let component: CopyTaskComponent;
  let fixture: ComponentFixture<CopyTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
