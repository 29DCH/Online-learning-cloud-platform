import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {AppComponent} from '../../app.component';

import {ErrorComponent} from '../shared/error/error.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {LoginComponent} from '../login/login.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,

    SidebarComponent,
    LoginComponent,

  ],
  //预加载, Material的dialog需要预加载,否者会报错
  entryComponents: [
    LoginComponent
  ]
})
export class HomeModule { }
