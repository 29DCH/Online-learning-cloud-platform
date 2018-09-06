import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {cardAnim} from '../../../../anims/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {


  //得到从从父组件(ProjectComponent)传过来的数据
  @Input() item;

  //子组件向父组件发送点击事件
  @Output() invite = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }

  /**
   * 点击邀请, 将这个事件发送给父组件 ProjectListComponent
   */
  onInvalidClick() {
    //emits(向上弹射)事件
    this.invite.emit();
  }

  /**
   * 点击编辑, 将这个点击事件发送给父组件 ProjectListComponent
   */
  onEditClick() {
    this.edit.emit();
  }


  /**
   * 点击删除,将这个点击事件发送给父组件 ProjectListComponent
   */
  onDelProjectClick() {
    this.delete.emit();

  }
}
