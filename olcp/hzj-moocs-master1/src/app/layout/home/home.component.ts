import { Component, OnInit } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  avatars: string[] = ['1', '2', '3'];
  isDark: boolean = false;

  constructor(private overlayContainer:OverlayContainer) { }

  ngOnInit() {
  }
  /**
   * 改变主题
   * @param dark
   */
  choiceTheme(dark: any) {
    this.isDark = dark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    }
  }
}
