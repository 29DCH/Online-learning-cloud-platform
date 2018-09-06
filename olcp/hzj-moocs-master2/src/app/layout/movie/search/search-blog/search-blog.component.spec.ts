import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlogComponent } from './search-blog.component';

describe('SearchBlogComponent', () => {
  let component: SearchBlogComponent;
  let fixture: ComponentFixture<SearchBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
