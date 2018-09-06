import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  template: `
    <router-outlet></router-outlet>
  `
})
export class MovieComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
