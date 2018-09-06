import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-student-attest',
  templateUrl: './personal-student-attest.component.html',
  styleUrls: ['./personal-student-attest.component.scss']
})
export class PersonalStudentAttestComponent implements OnInit {

  times: number[] = [2000, 2001, 2002, 2003, 2004];

  grades: string[] = ['大专', '本科', '研究生'];


  constructor() { }

  ngOnInit() {
  }

}
