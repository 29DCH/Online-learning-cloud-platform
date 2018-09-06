import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogHomeComponent} from './blog-home/blog-home.component';

const routes: Routes = [
  {
    path: '', component: BlogHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
