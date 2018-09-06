import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  //分页的数组
  currentIndex: number[] = [1, 2, 3, 4, 5, 6, 7];

  //单前页
  @Input() current;
  //总页书
  @Input() allCurrent;
  //当前页的最大数量
  @Input() size;
  //总数量
  @Input() totalElements;
  //点击页数,向父组件发送点击事件,并把点击的值传给父组件
  @Output() pageClick = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setCurrentIndex();
  }

  setCurrentIndex() {
    //设置分页数组时现将数组清空
    this.currentIndex = [];
    //向上取整, 设置总共的页数
    this.allCurrent = Math.ceil(this.totalElements/this.size);
    //防止页数小于1
    if (this.current <= 0) {
      this.current = 1;
    } else if (this.current <= 4) {     //单前页数是1到4时
      for (let i = 0; i < 7 && i < this.allCurrent; i++) {
        this.currentIndex[i] = i + 1;
      }
    } else if (this.current > 4 && this.current <= this.allCurrent - 3) {
      for (let i = this.current - 3, j = 0; i < this.current + 4 && i < this.allCurrent; i++, j++) {
        this.currentIndex[j] = i;
      }
    } else if (this.current > this.allCurrent - 3 && this.current <= this.allCurrent) {
      for (let i = 6, j = 0; i >= 0; i--) {
        if (this.allCurrent - i > 0) {
          this.currentIndex[j] = this.allCurrent - i;
          j++;
        }
      }
    }
  }

  /**
   * 点击分页时, 将点击事件发送给父组件, 并把值也传给父组件
   * @param page
   */
  choicePage(page) {
    this.current = page;
    if (this.current < 1) {
      this.current = 1;
    } else if (this.current > this.allCurrent) {
      this.current = this.allCurrent;
    }
    this.setCurrentIndex();
    this.pageClick.emit(this.current);
  }



}
