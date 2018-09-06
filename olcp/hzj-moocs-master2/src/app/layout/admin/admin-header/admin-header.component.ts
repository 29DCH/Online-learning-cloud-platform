import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  @Output() sidebarOpen = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  openSidebar():void {
    this.sidebarOpen.emit();
  }

}
