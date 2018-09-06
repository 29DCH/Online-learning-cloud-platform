import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-note',
  templateUrl: './student-note.component.html',
  styleUrls: ['./student-note.component.scss']
})
export class StudentNoteComponent implements OnInit {

  select_chip: string = '最新';

  constructor() { }

  ngOnInit() {
  }

}
