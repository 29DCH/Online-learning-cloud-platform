import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHomeComponent } from './search-home.component';

describe('SearchHomeComponent', () => {
  let component: SearchHomeComponent;
  let fixture: ComponentFixture<SearchHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
