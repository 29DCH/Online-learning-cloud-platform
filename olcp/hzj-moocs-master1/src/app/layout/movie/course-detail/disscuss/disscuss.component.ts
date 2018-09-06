import {Component, Input, OnInit} from '@angular/core';
import {CommentPage} from '../../../../entity/comment-page';

@Component({
  selector: 'app-disscuss',
  templateUrl: './disscuss.component.html',
  styleUrls: ['./disscuss.component.scss']
})
export class DisscussComponent implements OnInit {

  @Input() commentPage: CommentPage;

  constructor() { }

  ngOnInit() {
  }

}
