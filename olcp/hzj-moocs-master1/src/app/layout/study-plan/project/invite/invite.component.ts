import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  // myControl = new FormControl();
  constructor() { }

  options = [
    {
      id: 1,
      name: 'one'
    },
    {
      id: 2,
      name: 'two'
    },
    {
      id: 3,
      name: 'three'
    }
  ]

  ngOnInit() {
  }

  /**
   *
   * @param {{id: string; name: string}} user
   * @returns {{id: string; name: string} | string}
   */
  // displayUser(user: {id: string, name: string}) {
  //   return user ? user : '';
  // }
}
