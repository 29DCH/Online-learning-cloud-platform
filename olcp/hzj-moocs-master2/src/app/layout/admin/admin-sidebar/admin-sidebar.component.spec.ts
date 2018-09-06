import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarComponent } from './admin-sidebar.component';

describe('AdminSidebarComponent', () => {
  let component: AdminSidebarComponent;
  let fixture: ComponentFixture<AdminSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
