import {Component, EventEmitter, Inject, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import {User} from '../../entity/user';
import {UserService} from '../../service/user.service';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Route, Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  searchForm: FormGroup;

  onlogin = false;
  //Output的括号不能少
  /**
   * 子组件向父组件传递点击了菜单按钮这个事件,传递的值是void类型, 父组件是APPComponent
   * @type {EventEmitter<void>}
   */
  @Output() onVoted = new EventEmitter<void>();

  /**
   * 子组件向父组件传递点击了黑夜模式按钮,传递的值是boolean类型, 父组件是APPComponent
   * @type {EventEmitter<boolean>}
   */
  @Output() choiceDark = new EventEmitter<boolean>();

  user: User[];

  /**
   * 注入弹窗事件, MatDialog
   * @type {EventEmitter<boolean>}
   */
  constructor(public dialog: MatDialog,
              private userService: UserService,
              private router: Router,
              private fb: FormBuilder,
              @Inject(LOCAL_STORAGE) private storage: WebStorageService
              ) {
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });
    if (localStorage.getItem('userid')) {
      this.onlogin = true;
    }
    // this.userService.getAll()
    //   .pipe(first()).subscribe(users => {
    //     this.user = users;
    // })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (localStorage.getItem('userid')) {
      this.onlogin = true;
    }
  }

  /**
   * 点击菜单按钮
   * 子组件向父组件的交互
   */
  openSidebar() {
    //发射这个事件
    this.onVoted.emit();
  }

  /**
   * 点击黑夜模式
   * 子组件向父组件的交互, 向父组件发送一个boolean值
   * @param {boolean} choice
   */
  onChange(choice: boolean) {
    this.choiceDark.emit(choice);
  }

  /**
   * 点击搜索按钮
   */
  onSearch({value, valid}):void {
    console.log(value.search);
    this.router.navigate(['/study/search'], {
      queryParams: {
        key: value.search
      }
    })
  }

  /**
   * 打开弹窗, 登录和注册组件, 向登录和注册组件发送一个数字(selectIndex), 0 表示是登录,  1 表示是注册
   * @param {number} selectedIndex
   */
  openLoginDialog(selectedIndex: number): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '35%',
      data: {
        selectedIndex: selectedIndex
      }
    });

    /**
     * 接受从登录注册弹窗返回过来的数据
     */
    dialogRef.afterClosed()
      .subscribe((data: any) => {
        console.log(data);
        console.log(localStorage.getItem('userid'));
        if (localStorage.getItem('userid')) {
          console.log(localStorage.getItem('userid'))
        }
        // this.loginUserName = data.loginUserName;
        // console.log(this.loginUserName);
      });
  }



  outLogin() {
    localStorage.removeItem('userid');
  }
  // saveInLocal(key, val): void {
  //   console.log('recieved= key:' + key + 'value:' + val);
  //   this.storage.set(key, val);
  //   this.data[key]= this.storage.get(key);
  // }
  //
  // getFromLocal(key): void {
  //   console.log('recieved= key:' + key);
  //   this.data[key]= this.storage.get(key);
  //   console.log(this.data);
  // }

}
