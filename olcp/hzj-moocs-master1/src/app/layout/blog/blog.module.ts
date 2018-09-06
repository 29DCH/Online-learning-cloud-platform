import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogHomeComponent
  ]
})
export class BlogModule { }
