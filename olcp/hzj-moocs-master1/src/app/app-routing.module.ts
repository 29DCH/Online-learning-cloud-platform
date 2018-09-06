import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ErrorComponent} from './layout/shared/error/error.component';
const routes: Routes = [
  {path: '', loadChildren: 'app/layout/home/home.module#HomeModule'},
  {path: 'admin', loadChildren: 'app/layout/admin/admin.module#AdminModule'},
  {path: '**', component: ErrorComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
