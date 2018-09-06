import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMainComponent } from './movie-main.component';

describe('MovieMainComponent', () => {
  let component: MovieMainComponent;
  let fixture: ComponentFixture<MovieMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
