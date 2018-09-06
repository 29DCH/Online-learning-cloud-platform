import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';

const routes: Routes = [
  {path: '', component: AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
