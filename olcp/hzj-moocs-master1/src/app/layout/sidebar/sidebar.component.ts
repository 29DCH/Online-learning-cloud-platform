import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {



  @Output() navClick = new EventEmitter<void>();
  taday: string = 'day1';
  Dates = new Date();
  constructor() { }

  ngOnInit() {
    this.taday = `day${this.Dates.getDate()}`;
  }
  onNavClick() {

    this.navClick.emit();
  }

}
