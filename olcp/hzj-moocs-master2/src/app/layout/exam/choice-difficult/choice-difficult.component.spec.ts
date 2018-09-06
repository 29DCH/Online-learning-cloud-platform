import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceDifficultComponent } from './choice-difficult.component';

describe('ChoiceDifficultComponent', () => {
  let component: ChoiceDifficultComponent;
  let fixture: ComponentFixture<ChoiceDifficultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceDifficultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceDifficultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
